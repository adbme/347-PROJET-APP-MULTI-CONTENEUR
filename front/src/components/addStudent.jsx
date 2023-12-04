import "../styles/AddStudent.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({
    nom: "",
    prenom: "",
    entreprise: "",
    mail: "",
    num: "",
    dateNaiss: "",
    anneeApprentissage: "",
    statut: false,
  });

  function showSuccess(newStudent) {
    let success = document.getElementById("message");
    success.innerHTML = "Élève " + newStudent + " ajouté";
    success.className = "success";
    setTimeout(() => {
      success.className = "";
    }, 3000);
  }

  function showError() {
    let error = document.getElementById("message");
    error.innerHTML = "Remplissez tous les champs !";
    error.className = "error";

    setTimeout(() => {
      error.className = "";
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

    if (
      newStudent.nom &&
      newStudent.prenom &&
      newStudent.entreprise &&
      newStudent.mail &&
      newStudent.num &&
      newStudent.dateNaiss &&
      newStudent.anneeApprentissage
    ) {
      showSuccess(newStudent.nom);

      setNewStudent({
        nom: "",
        prenom: "",
        entreprise: "",
        mail: "",
        num: "",
        dateNaiss: "",
        anneeApprentissage: "",
        statut: false,
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
            <Form.Group controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom"
                name="nom"
                value={newStudent.nom}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le prénom"
                name="prenom"
                value={newStudent.prenom}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEntreprise">
              <Form.Label>Entreprise</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom de l'entreprise"
                name="entreprise"
                value={newStudent.entreprise}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez l'email"
                name="mail"
                value={newStudent.mail}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formNum">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez le numéro de téléphone"
                name="num"
                value={newStudent.num}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDateNaiss">
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control
                type="date"
                placeholder="Entrez la date de naissance"
                name="dateNaiss"
                value={newStudent.dateNaiss}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formAnneeApprentissage">
              <Form.Label>Année d'apprentissage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Entrez l'année d'apprentissage"
                name="anneeApprentissage"
                value={newStudent.anneeApprentissage}
                min={0}
                max={4}
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
