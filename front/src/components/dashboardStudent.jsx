import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/card.css";

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
                // Supposons que les données sont un tableau de tableaux, nous les convertissons en objets
                const studentsData = data.map((student) => ({
                    id: student[0],
                    Nom: student[1],
                    Prenom: student[2],
                    Email: student[4],
                    NumeroTel: student[5],
                    Entreprise: student[3],
                    DateNaissance: student[6],
                    AnneeApprentissage: student[7],
                    Statut: student[8]
                }));
                setStudents(studentsData);
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
                        <Card.Header>{student.Nom} {student.Prenom}</Card.Header>
                        <Card.Body>
                            <Card.Text>Email: {student.Email}</Card.Text>
                            <Card.Text>Téléphone: {student.NumeroTel}</Card.Text>
                            <Card.Text>Entreprise: {student.Entreprise}</Card.Text>
                            <Card.Text>Date de Naissance: {new Date(student.DateNaissance).toLocaleDateString()}</Card.Text>
                            <Card.Text>Année d'apprentissage: {student.AnneeApprentissage}</Card.Text>
                            <Card.Text>Statut: {student.Statut === 'echec' ? 'Échec' : 'Réussite'}</Card.Text>
                            <Button variant="primary" style={{ backgroundColor: "red", border: "none", color: "white" }}>
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
