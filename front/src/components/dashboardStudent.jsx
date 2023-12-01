
import "../styles/card.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DashboardStudent = () => {
  

  return (
    <div> 
        <h2 className='title'>Dashboard élèves</h2>

        <div className="container">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}  /></InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Card className="text-center card">
      <Card.Header>2ème année</Card.Header>
      <Card.Body>
        <Card.Title>Nom Prénom</Card.Title>
        <Card.Text className="blockquote-footer">
          Entreprise
        </Card.Text>
        <Card.Text className="blockquote-footer">
          mail
        </Card.Text>
        <Card.Text className="blockquote-footer">
          Numéro tél
        </Card.Text>
        <Card.Text className="blockquote-footer">
          Date de naissance
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer  style={{backgroundColor: "green", color: "white"}}>Réussite</Card.Footer>
    </Card>
</div>
    </div>
  );
};

export default DashboardStudent;
