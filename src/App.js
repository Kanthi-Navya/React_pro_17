import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactFrom from './components/contactform/ContactFormComponent';
import Toggles from './components/TogglesComponent';
import BubbleSort from './components/SortingAlgorithms/BubbleSortComponent';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={ContactFrom} />
            <Route path="/toggle" component={Toggles} />
            <Route path="/sorting" component={BubbleSort} />
          </Switch>
        </div>
        <div className="footer">
          
          <h6>footer</h6>
        </div>
      </div>
    </Router>
  );
}

export default App;
