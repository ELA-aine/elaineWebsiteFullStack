import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/photography">Photography</Link>
                <Link to="/music">Music & Video</Link>
                <Link to="/about">About & Contact</Link>
                <Link to="/interactive">Fun</Link>
            </nav>        
        </header>
    );
}

export default Header;
