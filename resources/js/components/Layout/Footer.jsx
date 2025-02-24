import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="primary" variant="primary">
      <Container className="justify-content-center">
        <Navbar.Text className='text-white'>
          © {new Date().getFullYear()} Sistemas de Informacion III. Todos los derechos reservados.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
