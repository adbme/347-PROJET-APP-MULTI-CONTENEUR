from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuration de MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'votre_user'
app.config['MYSQL_PASSWORD'] = 'votre_password'
app.config['MYSQL_DB'] = 'DB_EPSIC_Students'

mysql = MySQL(app)

@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM students")
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/student', methods=['POST'])
def add_student():
    details = request.json
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO students(nom, prenom, entreprise, mail, num, dateNaiss, annee_apprentissage, statut) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                (details['nom'], details['prenom'], details['entreprise'], details['mail'], details['num'], details['dateNaiss'], details['annee_apprentissage'], details['statut']))
    mysql.connection.commit()
    cur.close()
    return jsonify({'status': 'Student added'})

if __name__ == '__main__':
    app.run(debug=True)
