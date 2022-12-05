import { useState } from "react";
// import './Nav.css';
import "../../../index.css";
// import { scrollTo } from "react-scroll-to";
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [ans, setAns] = useState(true);
//   const ref = useRef(null);
//   const scroller = useRef();
  function changeBackground() {
    // var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  const ChonMenu = () => {
    if (ans === true) {
      document.getElementsByClassName("header-menu")[0].style.display = "block";
      setAns(false);
    } else {
      document.getElementsByClassName("header-menu")[0].style.display = "none";
      setAns(true);
    }
  };



  return (
    <section>
      <div className={navbar ? "header" : "header-ac"}>
        <div className="header-sub" >
          <div className="header-logo">
            <h2>DORSIN</h2>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <AnchorLink offset='100' href="#home">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#service">Services</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#feature">Features</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#pricing">Pricing</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#team">Team</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#blog">Blog</AnchorLink>
              </li>
              <li>
                <AnchorLink offset='100' href="#contact">Contact</AnchorLink>
              </li>
            </ul>
            <button className="btn">Try It Free</button>
          </div>
          <div className="menugach" onClick={ChonMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
