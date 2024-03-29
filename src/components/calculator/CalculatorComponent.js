import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter, Redirect} from 'react-router-dom';
import { configure } from 'axe-core';

// import { Button, ButtonGroup, ButtonToolbar, Input } from 'reactstrap';
// const Calculator = () => {
const mockBlock = (label, color, progress) => () => (
  <div className="mock-block" style={{backgroundColor: color}}>
    <i>{label}</i>
    {progress && <IncrementProgress />}
  </div>
);
const MockBlock = ({label, color, progress}) => mockBlock(label, color, progress)();
const MockRoute = ({label, color, progress, ...props}) => <Route {...props} render={mockBlock(label, color, progress)} />;
const TextRoute = ({text, ...props}) => <Route {...props} render={() => <p>{text}</p>} />;

const createProgressStore = () => {
  let state = 1;
  let subscribers = [];

  return {
    increment() {
      if (state < 10) {
        state = state + 1;
      } else if (state >= 10) {
        state = 0;
      }
      subscribers.forEach(subscriber => subscriber());
    },
    getState() {
      return state;
    },
    subscribe(subscriber) {
      subscribers.push(subscriber);
      return () => { subscribers = subscribers.filter(sub => sub !== subscriber); };
    },
  };
};
const progressStore = createProgressStore();

class IncrementProgress extends React.Component {
  componentDidMount() {
    progressStore.increment();
  }
  render() {
    return null;
  }
}

/* Dumb Components */

const Header = ({title, subtitle, summary}) => (
  <header id="view-header">
    <h1 id="view-heading">
      {title}
      {subtitle && <small> {subtitle}</small>}
    </h1>
    {summary && <p id="view-summary">{summary}</p>}
  </header>
);

const DetailFrame = ({children, ...props}) => (
  <div className="detail-frame" {...props}>
    {children}
  </div>
);

const ListFrame = ({children, ...props}) => (
  <ul className="list-frame" {...props}>
    {children}
  </ul>
);

const RouteHeader = withRouter(props => (
  <Header
    title={props.title}
    subtitle={<Route path={`${props.match.path}/:id`} render={({match}) => match.params.id} />}
    summary={props.summary}
  />
));


/* BreadCrumbs */

const pathBasename = urlPath => urlPath.split('/').filter(p => p).pop();
const BreadcrumbsItem = ({match}) => (
  <React.Fragment>
    <li>/</li>
    <li className={match.isExact && 'active'}>
      <Link to={match.url || ''}>
        {pathBasename(match.url)}
      </Link>
    </li>
    <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </React.Fragment>
);
const Breadcrumbs = () => (
  <nav className="breadcrumbs">
    <Route path="/:path" component={BreadcrumbsItem} />
  </nav>
);

/* Aside */

class ContentWorkflow extends React.Component {
  componentDidMount = () => {
    this.unsubscribe = progressStore.subscribe(() => this.forceUpdate());
  };
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="progress-bar">
        <div className="progress" style={{width: `${progressStore.getState()}0%`}} />
      </div>
    );
  }
}

const AsinPreview = props => (
  <div>
    <span>Preview | </span>
    <b>{props.match.params.asin}</b>
  </div>
);

const Aside = () => (
  <aside>
    <Route path="/asins" exact component={() => 'Select an Asin'} />
    <Route path="/asins/:asin" component={AsinPreview} />
    <Route path="/contents/:id" component={ContentWorkflow} />
  </aside>
);

/* Content */

const ContentDetailPane = props => (
  <DetailFrame>
    <RouteHeader title={props.match.params.id} summary="" />
    <Route path={`${props.match.path}/asins`} render={() => <IncrementProgress />} />
    <TextRoute path={`${props.match.path}/asins`} exact text={`The asin components below are same ones used for the top level /asins/ route. This asin list is filtered for the selected content: ${props.match.params.id}. Click an asin below to see details for that asin as it relates to this content.`} />
    <TextRoute path={`${props.match.path}/asins/:asin`} text='Notice that the <AsinList /> and <AsinDetail /> components are rendered side by side here. The top level /asins/ route uses these same components but only renders one or the other.' />
    <div className="split">
      <Route path={`${props.match.path}/asins`} component={AsinList} />
      <Route path={`${props.match.path}/asins/:asin`} component={AsinDetail} />
    </div>
    <MockRoute path={`${props.match.path}/edit`} label="Edit" progress />
    <MockRoute path={`${props.match.path}/preview`} label="Preview" progress />
    <MockRoute path={`${props.match.path}/languages`} label="Languages" progress />
  </DetailFrame>
);

const ContentDetail = props => (
  <DetailFrame>
    <nav className="view-nav">
      <li><NavLink to={`${props.match.url}/edit`} activeClassName="active">Edit</NavLink></li>
      <li><NavLink to={`${props.match.url}/preview`} activeClassName="active">Preview</NavLink></li>
      <li><NavLink to={`${props.match.url}/asins`} activeClassName="active">Asins</NavLink></li>
      <li><NavLink to={`${props.match.url}/languages`} activeClassName="active">Languages</NavLink></li>
    </nav>
    <Route path={`${props.match.path}`} component={ContentDetailPane} />
    <Redirect to={`${props.match.url}/edit`} />
  </DetailFrame>
);

const ContentList = props => (
  <ListFrame>
    <li><Link to={`${props.match.url}/<c-1>`}>Content 1</Link></li>
    <li><Link to={`${props.match.url}/<c-2>`}>Content 2</Link></li>
    <li><Link to={`${props.match.url}/<c-3>`}>Content 3</Link></li>
    <li><Link to={`${props.match.url}/<c-4>`}>Content 4</Link></li>
  </ListFrame>
);

const ContentApp = props => (
  <React.Fragment>
    <RouteHeader title="Content" />
    <Route path={props.match.path} exact component={ContentList} />
    <TextRoute path={`${props.match.path}/:id`} text="Clicking on the tabs below will route to a placeholder for that action. It will also increment the progress bar (to simulate a user building content). This demonstrates how to structure features with common context in different branches of the react tree." />
    <Route path={`${props.match.path}/:id`} component={ContentDetail} />
  </React.Fragment>
);

/* Asin */

const AsinDetail = props => <MockBlock label={props.match.params.asin} />;

const AsinList = props => (
  <ListFrame>
    <li><Link to={`${props.match.url}/<a-1>`}>Asin 1</Link></li>
    <li><Link to={`${props.match.url}/<a-2>`}>Asin 2</Link></li>
    <li><Link to={`${props.match.url}/<a-3>`}>Asin 3</Link></li>
    <li><Link to={`${props.match.url}/<a-4>`}>Asin 4</Link></li>
  </ListFrame>
);

const AsinApp = props => (
  <React.Fragment>
    <RouteHeader title="Asin" />
    <TextRoute path={`${props.match.path}`} text="This is a simple List / Detail component. Notice the aside content (top right of page). It is placed outside of the <AsinApp /> but it's aware of the current selected asin and will only be render at the /asins/ route. These asin components are reused in the /contents/ route in context of the the currently selected content." />
    <Route path={`${props.match.path}`} exact component={AsinList} />
    <Route path={`${props.match.path}/:asin`} component={AsinDetail} />
  </React.Fragment>
);

const HomeApp = props => (
  <React.Fragment>
    <Header title="Welcome!" summary="This is a demo of how the application will be structured. It's heavily influenced by react-router v4. Try not to think in terms of a traditional route/view app. Click around and look in the code. Notice that features use routes independent of other features on the same page view. The <Breadcrumbs />, <Aside />, and <AppMain /> are in different branches but behave as if they are components in a common template." />
    <ContentList match={{path: `${props.match.path}contents`, url: `${props.match.url}contents`}} />
  </React.Fragment>
);

/* App */

const Calculator = () => (
  <Router>
    <div id="app-shell">
      <header id="app-header">
        <div className="split">
          <Route path="/:path" component={Breadcrumbs} />
          <Aside />
        </div>
        <nav id="app-nav">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/contents" activeClassName="active">Content</NavLink></li>
          <li><NavLink to="/asins" activeClassName="active">Asins</NavLink></li>
        </nav>
      </header>
      <main id="app-main">
        <Route exact path="/" component={HomeApp} />
        <Route path="/contents" component={ContentApp} />
        <Route path="/asins" component={AsinApp} />
        <Redirect to="/" />
      </main>
      <footer id="app-footer">
        <MockBlock label="Footer" color="gray" />
      </footer>
    </div>
  </Router>
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
export default Calculator;