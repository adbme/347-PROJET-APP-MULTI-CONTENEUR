import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <Navbar  bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand  href="https://github.com/adbme/347-PROJET-APP-MULTI-CONTENEUR">Projet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            
            <Nav.Link href="/addStudent"><FontAwesomeIcon icon={faAdd}  /> Ajouter un élève</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;