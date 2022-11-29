import './Settings.css';
import { useEffect,useState } from 'react';

const Setting = () => {

  // const[color,setColor] = useState(red);

    
  // const handleColorChange = (e) =>{
  //     e.preventDefault();
  //     if(e.target.value === 'sp1'){
  //       window.getElementByclassName()
  //     }
  // }

//   const changeColor= (colorParam) => {
//     let color = colorParam.value.toLowerCase();
//     var optionElement = document.getElementsByClassName(color);
//     optionElement.style.color = color;
// };



//   useEffect(() => {
//     const color = getComputedStyle(document.documentElement).getPropertyValue('--color');
//     //console.log(color);
//    }, []);

//    const setColor = (newColor) => {
//     document.documentElement.style.setProperty('--color', newColor);
// }

  // const handleColorChange = (e) =>{
  //   if(setColor === sp1){
  //        window.getElememtByclassName('').style.backgroundColor = "red"
  //   }
  //   else if(setColor === sp2){
  //     window.getElememtByclassName('').style.backgroundColor = "blue"
  //   }
  // }
    
    return (

        <section id="setting">
            <div className="setting">
                <div className="setting-sub">
                    <i className="far fa-cog"></i>
                </div>
                <div className="setting-color">
                    <span className="sp1" value = "red"></span>
                    <span className="sp2" value = "blue" ></span>
                    <span className="sp3" value = "green"></span>
                    <span className="sp4" value = "pink"></span>
                    <span className="sp5" value = "black"></span>
                    <span className="sp6" value = "gold"></span>
                    <span className="sp7" value = "saddlebrown"></span>
                    <span className="sp8" value = "burlywood"></span>
                    <span className="sp9" value = "palegreen"></span>

                </div>
            </div>
            
        </section>

    )
}

export default Setting
