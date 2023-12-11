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
        date_naissance=data.get('date_naissance', ''),
        annee_apprentissage=data.get('annee_apprentissage', ''),
        statut=data.get('statut', '')
    )
    db.session.add(new_eleve)
    try:
        db.session.commit()
        return jsonify(new_eleve.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@eleves_api.route('/eleves', methods=['GET'])
def get_eleves():
    eleves_list = Eleve.query.all()
    eleves = [e.to_dict() for e in eleves_list]
    return jsonify(eleves)
