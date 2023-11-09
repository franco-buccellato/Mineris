import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../imagenes/logotipo-mineris.png'

function Encabezado() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#inicio">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        /* height="50" */
                        className="d-inline-block align-center"
                    />{' '}
                    Mineris
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#clientes">Clientes</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        
    );
}

export default Encabezado;