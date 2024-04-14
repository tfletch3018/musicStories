import { Outlet, Link } from 'react-router-dom';
import './style.css'

function Navbar() {

    return (

        <div>
            <nav className=''>
                <Link to="/">
                    Home
                </Link> {" "}
                <Link to="/music">
                    Music
                    </Link>
                    <Link to="/blog">
                        Thoughts
                        </Link>
                        <Link to="/contact">
                            Link Up
                            </Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;