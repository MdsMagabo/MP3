import { Link } from "react-router-dom"

const Navbar = () => {

    // navBar animation on scroll
    const navOnScroll = () => {
        const scrollTrigger = window.scrollY;
        const nav = document.querySelector(".nav");

        scrollTrigger > 0 ? nav.classList.add("navOnScroll") : nav.classList.remove("navOnScroll")
    }

    // eventListener on window to trigger navOnScroll function
    window.addEventListener("scroll", navOnScroll);

    return(
        <>
        <nav className="nav">
            <div className="brand">
                <div className="logo"/>
            </div>
            <nav className="navbar">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/#whatWeOffer" className="nav-item">What we Offer</Link>
                    <Link to="/#testimonials" className="nav-item">Testimonials</Link>
                    <Link to="/#aboutUs" className="nav-item">About Us</Link>
                    <Link reloadDocument to="/installationSite" className="nav-item">Installation Site</Link>
                    <Link to="carModel" className="nav-item">Car Model</Link>
            </nav>
        </nav>
        </>
    )
}
export default Navbar;