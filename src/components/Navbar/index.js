import { Outlet, Link } from 'react-router-dom';
import './style.css'

function Navbar() {

    return (

        <div>

            <nav className='myNav'>

                <Link to="/"
                    className='navHeader'>
                    Home
                </Link> {" "}
                <Link to="/contact"
                    className='navLinks'>
                    Link Up
                </Link>
                <Link to="/blog"
                    className='navLinks'>
                    Thoughts
                </Link>
                <Link to="/music"
                    className='navLinks'>
                    Music
                </Link>

            </nav>

            <Outlet />
            
        </div>
    );
}

export default Navbar;