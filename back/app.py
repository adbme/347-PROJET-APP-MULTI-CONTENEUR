from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eleves.db'
db = SQLAlchemy(app)

from models.eleve import Eleve
from api.eleves import eleves_api

app.register_blueprint(eleves_api, url_prefix='/api')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
