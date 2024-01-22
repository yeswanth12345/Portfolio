import React from "react";
import Resume from './Resume.pdf'

function Navbar() {

  const [mode, setMode] = React.useState({
    className : "fa-solid fa-sun navitems"
  })

  function changeMode(){
    setMode(()=>{
      if(mode.className === "fa-solid fa-moon navitems"){
        return{className:"fa-solid fa-sun navitems"}
      }
      else if(mode.className === "fa-solid fa-sun navitems"){
        return{className:"fa-solid fa-moon navitems"}
      }
  })
}

function viewResume(){
  window.open(Resume);
}

if((mode.className).includes("moon")){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}
else if((mode.className).includes("sun")){
  document.body.style.backgroundColor = "#91E0FF"           
  document.body.style.color = "#1F2833"
}

return (
    <nav className="navbar">
      <h6 className="navitems">Yeswanth sai Vuddula</h6>
      <div className="rightitems">
        {/* <i onClick={changeMode} className={mode.className}></i> */}
        <button type="button" onClick={viewResume} className="btn btn-sm resumebtn">Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
