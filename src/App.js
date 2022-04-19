import React from 'react';

import './App.css';
import './Navbar.css';

import Navbar from './componants/Navbar';
import Footer from './componants/Footer';



function Container ({className= '', color, style}) {
  return (
    <div className={className}
    color= {color}
    style={{
      ...style,
    }}
    >
    </div>
)
}

function LoginForm() {
const [email, setEmail] = React.useState('')
const [error, setError] = React.useState()
const handleChange = event => {
setEmail(event.target.value)
setError(event.target.value.includes('@') ? null : "L'email est non valide")
}

const handleSubmit = event => {
event.preventDefault()
alert(`Bonjour ${email}`)
}
return (
<form onSubmit={handleSubmit}>
<label>
Ton prenom :
<input type="text" name="nom" />
Adresse email :
<input type="text" name="emailInput" onChange={handleChange} />
</label>
<div style={{color: 'red'}}>{error}</div>
<input type="submit" value="Connexion" />
</form>
)
}




function App() {
  return (
    <>
    <Navbar/>
    <div  className="container" >

    <LoginForm/>
    </div>

    <Footer/>
    </>
  )
}

export default App;
