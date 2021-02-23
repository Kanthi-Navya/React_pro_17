import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Dishdetail from './components/DishdetailComponent';
function App() {
  return (
    
      <div className="App">
      <Navbar dark color= "primary">
        <div className="container">
          <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>  
      <Menu />
      
     {/* <Dishdetail /> */}
    </div>

  );
}

export default App;
