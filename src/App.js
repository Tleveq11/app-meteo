import React from 'react';

import './App.css';
import './Footer.css';
import './Navbar.css';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';



function App() {
  return (
<>
<Navbar />
    <div className="App">
      <header className="App-meteo">
      <h1> Mon app Meteo</h1>
      </header>
    </div>
  <Footer />
</>
  );
}

export default App;
