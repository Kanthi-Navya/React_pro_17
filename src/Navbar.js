import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <Link to='/contact' className="btnFont">
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
                      Sorting
                    </Link>
                </Button>
                <Button  color="link">
                    <Link to='/toggle' className="btnFont">
                      TOGGLE
                    </Link>
                </Button>
                
            </div>
        </nav>
    );

}

export default Navbar;