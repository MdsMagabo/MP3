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
                    <Link to="aboutUs" className="nav-item">About US</Link>
                    <Link to="tips&Advice" className="nav-item">Tips & Advice</Link>
                    <Link to="promo" className="nav-item">Promo</Link>
                    <Link to="brands" className="nav-item">Brands</Link>
                    <Link to="installationSite" className="nav-item">Installation Site</Link>
                    <Link to="carModel" className="nav-item">Car Model</Link>
            </nav>
        </nav>
        </>
    )
}
export default Navbar;