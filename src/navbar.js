import React from 'react';





function Navbar()  {

  return (
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Mon app Meteo
      </Navbar.Brand>
    </Container>
)
}

export default Navbar;
