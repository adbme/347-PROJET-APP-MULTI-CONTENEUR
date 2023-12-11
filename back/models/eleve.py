# Dans models/eleve.py
from back.app import db

class Eleve(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(50), nullable=False)
    prenom = db.Column(db.String(50), nullable=False)
    entreprise = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True, nullable=False)
    numero = db.Column(db.String(20), unique=True)
    date_naissance = db.Column(db.Date, nullable=False)
    annee_apprentissage = db.Column(db.Integer)
    statut = db.Column(db.String(20), nullable=False)  # 'échec' ou 'réussir'
