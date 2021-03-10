import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactFrom from './components/contactform/ContactFormComponent';
import Toggles from './components/TogglesComponent';
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
            <Route exactpath="/calculator">
              {/* <Calculator />
              <Game /> */}
               <Toggles />
            </Route>
         
          </Switch>
        </div>
     
      
     
          
       

     {/* <Dishdetail /> */}
    </div>
    </Router>
      

  );
}

export default App;
