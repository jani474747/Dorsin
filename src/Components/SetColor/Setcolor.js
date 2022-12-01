import React, { useRef, useEffect } from "react";
import "../../index.css";

function Settings() {
  useEffect(() => {
    // const color = 
    getComputedStyle(document.documentElement).getPropertyValue(
      "--red"
      );
    // console.log(color);
  }, []);
  
  const setColor = (newColor) => {
    document.documentElement.style.setProperty("--red", newColor);
  };
  
  const settingElement = useRef();
  // const handleChangeColor = (e) => {
  //   e.preventDefault();
  // };


  const handleClickCollapse = () => {
    settingElement.current.classList.toggle("open");
  };

  return (
    <div id="setting" ref={settingElement}>
      <div className="setting-icon" onClick={handleClickCollapse}>
        <i className="far fa-cog"></i>
      </div>
      <div className="choose-color">
        <h4>Select Your Color</h4>
        <div className="list-color">
          {/* <Color
             listColor={listColor}
              onClick={handleChangeColor}/> */}

          <div className="setting-color">
            <button
              onClick={setColor("red")}
              className="sp1"
              value="red"
            ></button>
            <button
              onClick={() => setColor("blue")}
              className="sp2"
              value="blue"
            ></button>
            <button
              onClick={() => setColor("green")}
              className="sp3"
              value="green"
            ></button>
            <button
              onClick={() => setColor("pink")}
              className="sp4"
              value="pink"
            ></button>
            <button
              onClick={() => setColor("black")}
              className="sp5"
              value="black"
            ></button>
            <button
              onClick={() => setColor("gold")}
              className="sp6"
              value="gold"
            ></button>
            <button
              onClick={() => setColor("saddlebrown")}
              className="sp7"
              value="saddlebrown"
            ></button>
            <button
              onClick={() => setColor("burlywood")}
              className="sp8"
              value="burlywood"
            ></button>
            <button
              onClick={() => setColor("palegreen")}
              className="sp9"
              value="palegreen"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

// onChangeColor={(e) =>setColor(!e && e.target.value)}/>
