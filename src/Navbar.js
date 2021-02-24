import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h2>Ristorante Con Fusion</h2>
                <Button color="link">
                    <Link to='/calc'>
                        Contact
                    </Link>
                </Button>
                <Button color="success">
                    <Link to='/menu'>
                      Menu
                    </Link>
                </Button>
            </div>
        </nav>
    );

}

export default Navbar;