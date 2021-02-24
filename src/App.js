import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './components/Calculator/CalculatorComponent';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />  
      <div className="content">
        <Switch>
          <Route exact path="/calc">
            <Calculator />
          </Route>
          <Route exactpath="/menu">
            <Menu />
          </Route>
        </Switch>
      </div>
      
     

     {/* <Dishdetail /> */}
    </div>
    </Router>
      

  );
}

export default App;
