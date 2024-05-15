import { NavLink } from 'react-router-dom';
import Avatar from '../assets/Avatar.webp'


export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <h2 className="navbar-brand mt-2">Mark Barrie</h2>
            <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link nav-text" activeclassname="active"to="/">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav-text" activeclassname="active" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav-text" activeclassname="active" to="/resume">Resume</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link nav-text" activeclassname="active" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* these are left blank intentionally */}
                    </li>
                    <li className="nav-item">
                        {/* these are left blank intentionally */}
                    </li>
                    <li className="nav-item">
                        {/* these are left blank intentionally */}
                    </li>
                    <li className="nav-item">
                        {/* these are left blank intentionally */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}