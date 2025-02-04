import { Container, Navbar, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";

import icon1 from "../../assets/img/nav-icon1.svg"
import icon2 from "../../assets/img/github.png"
import icon3 from "../../assets/img/nav-icon3.svg"


export const NavBar = ({ texts, changeLanguage, language }) => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled , setScrolled] = useState(false);

    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return(
            <Navbar  className={scrolled  ? 'scrolled ': ''}>
            <div className="principal">
                <Navbar.Brand href="#home" className="brand">
                    <h3 className="logo">{texts.logo || "Home"}</h3>
                </Navbar.Brand>
                <div className="btn-mobile" onClick={() => {
                    console.log("Menu aberto?", !openMenu);
                    setOpenMenu(!openMenu);
                    }}>
                    <FaBars />
                </div>
            </div>
            <div id="basic-navbar-nav" className={`menu ${openMenu ? 'open' : ''}`} >
                <Nav className="me-auto">
                    <Nav.Link href="#home" 
                            className={activeLink === 'home' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            {texts.home}</Nav.Link>

                    <Nav.Link href="#Journey" 
                            className={activeLink === 'Journey' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('Journey')}>
                            {texts.Journey}</Nav.Link>

                    <Nav.Link href="#About" 
                            className={activeLink === 'About' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('About')}>
                            {texts.About}</Nav.Link>

                    <Nav.Link href="#habilid" 
                            className={activeLink === 'habilid' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('habilid')}>
                            {texts.habilid}</Nav.Link>

                    <Nav.Link href="#project" 
                            className={activeLink === 'project' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('project')}>
                            {texts.project}</Nav.Link>

                    <Nav.Link href="#contact" 
                            className={activeLink === 'contact' ? 'active-navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('contact')}>
                            {texts.contact}</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/kethelyn-cavalari/"><img src={icon1} alt="Ícone 1" /></a>
                        <a href="https://github.com/Kethelynl"><img src={icon2}/></a>
                        <a href="https://www.instagram.com/ket_cavalari/"><img src={icon3}/></a>
                    </div>
                    <div className="language-buttons">
                        <button onClick={() => changeLanguage("en")} className={language === "pt" ? "active" : ""}><img src="/assets/img/usa.png" width={'40px'}/></button>
                        <button onClick={() => changeLanguage("pt")} className={language === "en" ? "active" : ""}><img src="/assets/img/brasil.png" width={'45px'}/></button>
                    </div>
                    <a className="vvd" href="https://wa.me/5511984870198?text=Olá%2C%20gostei%20do%20seu%20perfil%20podemos%20conversar?"><span>{texts.btn}</span></a>
                </span>
            </div>
        </Navbar>     
    )
}

export default NavBar