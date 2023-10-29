import {useEffect,useRef} from "react";
import logoImg from "../../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/products",
    display: "Places",
  },
  {
    path: "/information",
    display: "Information",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="buttons">
          <div className='logo'>
            <Link className='no-underline' href="/"><img src={logoImg} alt="Logo"/></Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="navLink">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="nav-link">{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="toggleMenu">
            <span className="mobile-menu" onClick={toggleMenu}>
              <BiMenu className="menu-icon" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;