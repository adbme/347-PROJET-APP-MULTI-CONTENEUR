
import "../styles/card.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";



const DashboardStudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
          console.log(data);
        })
        .catch((error) => console.error("Fetch error:", error));
    }, []);

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
</div>

<div className="card-container">
        {students.map((student) => (
          <Card key={student.id} className="text-center">
            <Card.Header>{student.name}</Card.Header>
            <Card.Body>
              <Card.Text>Email: {student.email}</Card.Text>
              <Card.Text>Phone: {student.phone}</Card.Text>
             
              <Button variant="primary" style={{backgroundColor: "red", border: "none", color: "white"}}>Supprimer</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardStudent;
