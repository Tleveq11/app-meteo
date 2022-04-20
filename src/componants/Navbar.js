import React from  'react';



function Navbar () {
  return (
    <div>
    <nav>
      <img src="./logometeo.png"/>
      <div className="logo" > Meteo Perso</div>
      <ul className="nav-links">
          <li><a>Home</a></li>
          <li><a>Info</a></li>
          <li><a>Contact</a></li>
      </ul>
    </nav>
    </div>
    );

}


export default Navbar

