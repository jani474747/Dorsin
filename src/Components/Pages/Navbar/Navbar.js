import react, { useState } from "react";
import "./Nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  const [nav, setNav] = useState(false);
  const [ans, setAn] = useState(true);
  function changeBackground() {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  const ChonMenu = () => {
    if (ans === true) {
      document.getElementsByClassName("header-menu-gach")[0].style.display =
        "block";
      setAn(false);
    } else {
      document.getElementsByClassName("header-menu-gach")[0].style.display =
        "none";
      setAn(true);
    }
  };

  return (
    <section>
      <div className={nav ? "header" : "header-ac"}>
        <div className="header-sub">
          <div className="header-logo">
            <h2>DORSIN</h2>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#service">Services</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#feature">Features</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#pricing">Pricing</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#team">Team</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#blog">Blog</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>
            <button className="btn">Try It Free</button>
          </div>
          <div className="menugach" onClick={ChonMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="header-menu-gach">
          <ul>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#service">Services</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#feature">Features</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#pricing">Pricing</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team">Team</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#blog">Blog</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
          <button className="btn-gach">Try It Free</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
