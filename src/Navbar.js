import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import About from './components/AboutComponent'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h2> 𝓷ⓐ𝓥ץค </h2>
               </div>
               <div>
               
                <Button color="link">
                    <Link to='/menu' className="btnFont">
                      MENU
                    </Link>
                </Button>
                <Button color="link" >
                    <Link to='/About' className="btnFont">
                        ABOUT
                    </Link>
                </Button>
                <Button color="link" >
                    <Link to='/contact' className="btnFont">
                        CONTACT
                    </Link>
                </Button>
                <Button  color="link">
                    <Link to='/sorting' className="btnFont">
                      SORTING 
                    </Link>
                </Button>
                <Button  color="link">
                    <Link to='/toggle' className="btnFont">
                      TOGGLE
                    </Link>
                </Button>
                <div>
                
                </div>
                
            </div>
        </nav>
    );

}

export default Navbar;