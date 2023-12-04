import "../styles/AddStudent.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function showSuccess(newStudent){
    let success = document.getElementById("message")
    success.innerHTML ="élève "+newStudent + " ajouté"
    success.className = "success"
    setTimeout(() => {
      success.className =""
  }, 3000);
  
  }
  
  function showError(){
   let error = document.getElementById("message")
    error.innerHTML ="Remplissez tout les champs !"
    error.className = "error"
    
    setTimeout(() => {
      error.className =""
  }, 3000);
  
  }

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newStudent.name && newStudent.email && newStudent.phone) {
      showSuccess(newStudent.name);

      setNewStudent({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      showError();
    }
  };

  return (
    <div>
      <h2 className="title">Ajouter un élève</h2>

      <p id="message"></p>
      <Card className="text-center">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez l'email"
                name="email"
                value={newStudent.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez le téléphone"
                name="phone"
                value={newStudent.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ajouter l'élève
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddStudent;
