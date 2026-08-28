import "./Navbar.css";

function Navbar() {

    return (

        <nav>
            <div className="nav-container">
                <div className="logo">
                    <span className="logo-icon">◆</span>
                    <span className="logo-text">Gisela Elia</span>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;