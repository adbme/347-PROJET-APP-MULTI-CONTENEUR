from flask import Blueprint, request, jsonify
from ..models.eleve import Eleve
from back.app import db

eleves_api = Blueprint('eleves_api', __name__)

@eleves_api.route('/eleves', methods=['POST'])
def create_eleve():
    data = request.get_json()
    new_eleve = Eleve(
        nom=data['nom'],
        prenom=data['prenom'],
        entreprise=data.get('entreprise', ''),
        email=data['email'],
        numero=data.get('numero', ''),
        date_naissance=data['date_naissance'],
        annee_apprentissage=data['annee_apprentissage'],
        statut=data['statut']
    )
    db.session.add(new_eleve)
    db.session.commit()
    return jsonify({"message": "Élève créé avec succès"}), 201

@eleves_api.route('/eleves', methods=['GET'])
def get_eleves():
    eleves_list = Eleve.query.all()
    eleves = [{"nom": e.nom, "prenom": e.prenom, "email": e.email} for e in eleves_list]
    return jsonify(eleves)
