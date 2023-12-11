from back.app import db

class Eleve(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(50), nullable=False)
    prenom = db.Column(db.String(50), nullable=False)
    entreprise = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True, nullable=False)
    numero = db.Column(db.String(20), unique=True)
    date_naissance = db.Column(db.Date)
    annee_apprentissage = db.Column(db.Integer)
    statut = db.Column(db.String(20))  # Par exemple, 'actif' ou 'diplômé'

    def to_dict(self):
        return {
            'id': self.id,
            'nom': self.nom,
            'prenom': self.prenom,
            'entreprise': self.entreprise,
            'email': self.email,
            'numero': self.numero,
            'date_naissance': self.date_naissance.isoformat() if self.date_naissance else None,
            'annee_apprentissage': self.annee_apprentissage,
            'statut': self.statut
        }
