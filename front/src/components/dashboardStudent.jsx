import "../styles/card.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

const DashboardStudent = () => {
    const [students, setStudents] = useState([]);

    const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

// Your other routes and middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


    useEffect(() => {
        fetch("http://localhost:5000/students")
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
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    <Form.Control
                        placeholder="Rechercher un élève"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>

            <div className="card-container">
                {students.map((student) => (
                    <Card key={student.id} className="text-center">
                        <Card.Header>{student.nom} {student.prenom}</Card.Header>
                        <Card.Body>
                            <Card.Text>Email: {student.mail}</Card.Text>
                            <Card.Text>Téléphone: {student.num}</Card.Text>
                            <Card.Text>Entreprise: {student.entreprise}</Card.Text>
                            <Card.Text>Date de Naissance: {student.dateNaiss}</Card.Text>
                            <Card.Text>Année d'apprentissage: {student.annee_apprentissage}</Card.Text>
                            <Card.Text>Statut: {student.statut === 'echec' ? 'Échec' : 'Réussite'}</Card.Text>
                            <Button variant="primary" style={{backgroundColor: "red", border: "none", color: "white"}}>
                                <FontAwesomeIcon icon={faTrash} /> Supprimer
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DashboardStudent;
