import pymysql.cursors

# Connexion à la base de données
connection = pymysql.connect(host='localhost',
                             user='votre_user',
                             password='votre_password',
                             database='DB_EPSIC_Students',
                             cursorclass=pymysql.cursors.DictCursor)

with connection:
    with connection.cursor() as cursor:
        # Création de la table
        sql = """
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255) NOT NULL,
            prenom VARCHAR(255) NOT NULL,
            entreprise VARCHAR(255),
            mail VARCHAR(255),
            num VARCHAR(255),
            dateNaiss DATE,
            annee_apprentissage INT,
            statut ENUM('echec', 'reussir') NOT NULL
        )
        """
        cursor.execute(sql)
    connection.commit()
