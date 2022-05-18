
import React, {useState} from 'react'
import axios from 'axios'

import './App.css';
import './Navbar.css';
import './Footer.css';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';



function App() {
  const [data, setData] = useState()
  const [ location, setLocation] = useState ('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ea15a20afb45d9e76ea180cd56089bd0`


const searchLocation = (e) => {
  if (e.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
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
       <p> {data.name}</p>

      </div>
      <div className="temp">
         {data.main ? <h1>{data.main.temp}</h1> : null}
        <p>Temperature</p>
      </div>
       <div className="description">
       {data.weather ? <h1> {data.weather.main}</h1> : null}
        <p>Temperature</p>
      </div>
     <div className="bottom">
      <div className="feels">
        <p className="bold"></p>
        {data.main ? <h1>{data.main.fells_like}</h1> : null}
         <p>Ressenti</p>
      </div>
        <div className="humidity">
        <p className="bold"></p>
        {data.main ? <h1>{data.main.humidity}</h1> : null}
        <p>Humidité</p>
        </div>
      <div className="wind">
          <p className="bold"></p>
          {data.main ? <h1>{data.main.temp}</h1> : null}
          <p>Vent</p>
      </div>
     </div>
    </div>
     <Footer />
    </div>

    </>
  )
}


export default App;
