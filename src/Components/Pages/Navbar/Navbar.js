import { useState ,useRef} from 'react';
import './Nav.css';
import { scrollTo } from "react-scroll-to";


function Navbar(){
    const [navbar,setNavbar] = useState(false)
    const [ans,setAns] = useState(true)
    const ref = useRef(null)
    function changeBackground() {
        
        // console.log(window.scrollY);
    if(window.scrollY > 80){
        setNavbar(true)
    }else {
        setNavbar(false)
    }
}
window.addEventListener("scroll",changeBackground)
const ChonMenu =()=>{
    if(ans===true){
        document.getElementsByClassName("header-menu")[0].style.display = "block";
        setAns(false)
        }
        else {
            document.getElementsByClassName("header-menu")[0].style.display = "none";
            setAns(true)
            
        }
    }
    // const handlescrollClick = () => {
    //     window.scrollIntoView({behavior: 'smooth', spy : true
    //     ,smooth : 'true'
    //     ,offset : -70
    //     ,duration : 500 });
    // }
    
    
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    
    return (
        
        <section>
            <div className={navbar ? "header" : "header-ac"}>
                <div className="header-sub">
                    <div className="header-logo">
                        <h2>DORSIN</h2>
                    </div>
                    <div className="header-menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#feature">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button className="btn">Try It Free</button>
                        
                    </div>
                    <div className="menugach" onClick={ChonMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                {/* <div className="header-menu-gach" >
                        <ul>
                            
                            <li><a href="#" >Home</a></li>
                            <li><a href="#" >Services</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#" >Team</a></li>
                            <li><a href="#" >Blog</a></li>
                            <li><a href="#" >Contact</a></li>
                            
                        </ul>
                        <button className="btn-gach">Try It Free</button>
                </div> */}

            </div>
        </section>
    )
}

export default Navbar;









