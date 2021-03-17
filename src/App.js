import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactFrom from './components/contactform/ContactFormComponent';
import Toggles from './components/TogglesComponent';
import BubbleSort from './components/SortingAlgorithms/BubbleSortComponent';
function App() {
  return (
    <Router>
      
      <div className="App">
      <Navbar /> 
      
     {/* Sidebar */}
    
    {/* <SideBar /> */}

        <div className="content">
          <Switch>
          <Route path="/menu" component={Menu} />
            <Route exact path="/contact" component={ContactFrom} />
            <Route exactpath="/sorting" component={BubbleSort} />

            <Route exactpath="/calculator">
              {/* <Calculator />
              <Game /> */}
               <Toggles />
            </Route>
       
          
          </Switch>
        </div>
     
      <div className="footer">
        <h6>footer</h6>

      </div>
     
          
       

     {/* <Dishdetail /> */}
    </div>
    </Router>
      

  );
}

export default App;
