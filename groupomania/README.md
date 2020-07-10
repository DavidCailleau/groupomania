
# Projet 7 - Parcours Développeur Web OpenClassrooms
"Créez un réseau social d'entreprise".

## Compétences évaluées :

- Gérer un stockage de données à l'aide de SQL
- Personnaliser le contenu envoyé à un client web
- Implémenter un stockage de données sécurisé en utilisant SQL
- Authentifier un utilisateur et maintenir sa session

## Développement

La partie frontend du projet est développée en Javascript.
La partie backend du projet est développée avec NodeJS, Express, et MySQL.


## Pré requis

Cloner le repository
NPM install
Node JS doit être installé localement sur la machine ainsi que MySQL
Côté backend, plusieurs dépendances npm ont été nécessaires : - Bcrypt - Body-Parser - Express - jsonwebtoken - Multer - Bouncer - Helmet - password validator - Nodemon

La sauvegarde de la base de données groupomania_intra.sql doit être importée


## Lancement

Côté backend : - Dans le terminal, se placer dans le dossier backend du projet et taper la commande "nodemon server" - Le backend (API) se lance sur http://localhost:3000/.

Ouvrir ensuite dans votre navigateur, login.html. ( `./frontend/html/login.html`)
Vous pouvez créer un nouveau compte en cliquant sur le menu concerné ou vous connecter avec un user déjà existant.

Login Admin = cailleau.david@groupomania.com    Mdp = 1234
Login Basic = diaz.paola@groupomania.com        Mdp = 1234

Attention en cas de création d'un nouvel utilisateur, le mot de passe doit contenir entre 8 et 20 caractères avec au moins 1 majuscule, 1 minuscule, 1 chiffre et pas d'espace.
