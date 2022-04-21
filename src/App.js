
import React, {useState} from 'react'
import axios from 'axios'

import './App.css';
import './Navbar.css';
import './Footer.css';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';



function App() {
  const [data, setData] = useState({})
  const [ location, setLocation] = useState ('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ea15a20afb45d9e76ea180cd56089bd0`



const searchLocation = (e) => {
  if (e.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

 return (
    <>
    <div>
     <Navbar />
     <div className="container">
     <div className="search">
     <input
     value={location}
     onChange= {e => setLocation(e.target.value)}
     onKeyPress={searchLocation}
     placeholder= 'entrez votre ville'
     type="text" />
     </div>

      <div className="location">
        <p> La Barben </p>
      </div>
      <div className="temp">
        <h1>30°</h1>
      </div>
       <div className="description">
        <p> nuageux </p>
      </div>
     <div className="bottom">
      <div className="feels">
        <p className="bold">50°</p>
         <p> Ressenti </p>
      </div>
        <div className="humidity">
        <p className="bold">20% </p>
        <p> Humidité</p>
        </div>
      <div className="wind">
          <p className="bold">18 KM/h</p>
          <p> Vent </p>
      </div>
     </div>
    </div>
     <Footer />
    </div>

    </>
  )
}


export default App;
