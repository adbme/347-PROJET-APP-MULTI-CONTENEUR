import "../styles/card.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

// Your other routes and middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const DashboardStudent = () => {
  const renderTooltip = (props) => (
    <Tooltip
      style={{ backgroundColor: "#FF9494", color: "white" }}
      id="button-tooltip"
      {...props}
    >
      Pas disponible pour le moment
    </Tooltip>
  );

  const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Filtrer les étudiants en fonction de la valeur de recherche
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h2 className="title">Dashboard élèves</h2>

      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Rechercher un élève"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
      </div>

      <div className="card-container">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="text-center">
            <Card.Header>
              {student.Nom} {student.Prenom}
            </Card.Header>
            <Card.Body>
              <Card.Text>Email: {student.Email}</Card.Text>
              <Card.Text>Téléphone: {student.NumeroTel}</Card.Text>
              <Card.Text>Entreprise: {student.Entreprise}</Card.Text>
              <Card.Text>Date de Naissance: {student.DateNaissance}</Card.Text>
              <Card.Text>
                Année d'apprentissage: {student.AnneeApprentissage}
              </Card.Text>
              <Card.Text>
                Statut: {student.Statut === "echec" ? "Échec" : "Réussite"}
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                }}
              >
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
