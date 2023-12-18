import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';

const TopNavBar = () => {
    return (
        <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand as={Link}to="/">Licoleria El padrino</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll>
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link}to='/BebidasA'>Bebidas con A</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link}to='/BebidasB'>Bebidad con B</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link}to='/Filtros'>Filtros</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href='/'>
                  <Nav.Link as={Link} to='/Busqueda'>Busqueda</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link}to='/Favoritos'>Favoritos</Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
        </>
    )
}

export default TopNavBar