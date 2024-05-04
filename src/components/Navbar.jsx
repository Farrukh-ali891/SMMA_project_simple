import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Navbar = ({ handleButtonClick }) => {

    // active navbar link state
    const [activeLink, setActiveLink] = useState(() => {
        // Get the active link from localStorage, default to "home" if not found
        return localStorage.getItem('activeLink') || ('home');
    });

    // closing navbar every time when a link is clicked
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleActiveLink = (link) => {
        // setting active class state
        setActiveLink(link);
        // setting closing link state
        setIsNavbarOpen(false);
        
        if (link === "dashboard") {
            handleNavDisplayClick();
        }
        
    }

    const handleNavDisplayClick = () =>{
        // setting value to false to determine when navbar and footer to be hidden
        handleButtonClick();
    }

    useEffect(() => {
        // Update localStorage when activeLink changes
        localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);


    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <Link className="logo-link" to="/" onClick={() => handleActiveLink("home")}>
                        <img className="logo" src="\src\assets\images\swirl marketing logo.png" alt="swirl marketing logo" />
                    </Link>

                    <button onClick={handleNavbarToggle} className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`} type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavbarOpen ? 'true' : 'false'} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav navbar-collapse">
                            <li className="nav-item">
                                <Link className={`nav-link click-scroll ${activeLink === 'home' ? 'active' : ''}`} to="/" onClick={() => handleActiveLink("home")}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link click-scroll ${activeLink === 'services' ? 'active' : ''}`} to="/services" onClick={() => handleActiveLink("services")}>Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link click-scroll ${activeLink === 'partner' ? 'active' : ''}`} to="/partner" onClick={() => handleActiveLink("partner")}>Partner</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link click-scroll ${activeLink === 'about' ? 'active' : ''}`} to="/about" onClick={() => handleActiveLink("about")}>About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link click-scroll ${activeLink === 'contact' ? 'active' : ''}`} to="/contact" onClick={() => handleActiveLink("contact")}>Contact Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/dashboard" onClick={() => handleActiveLink("dashboard")}>Dashborad</Link>
                            </li>

                            <li>
                                <Link to="/login" id="nav-icon">Login</Link>
                            </li>

                            <li>
                                <Link to="/signup" id="nav-icon2">SignUp</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar