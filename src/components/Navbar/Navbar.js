import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FooterApp from '../Footer/Footer';


function Navbarapp() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className='flex'>
          <Navbar.Brand>
             <img src="./favicon.ico"></img>
           <strong>  CRIPTO </strong></Navbar.Brand>
          <Nav className="me-center flex">
            <Link className='nav-link' to="/inicio"> Inicio</Link>
            <Link className='nav-link' to="/cripto"> Cripto</Link>
            <Link className='nav-link' to="/top"> Top Cripto</Link>
            <Link className='nav-link' to="/mercado"> Mercado</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      <FooterApp/>
    </div>
  );
}

export default Navbarapp;