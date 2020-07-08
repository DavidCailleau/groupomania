const connection = require('../connectionDbMysql');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordValidator = require("password-validator"); //Package qui permet de compléxifier un mot de passe

var schema = new passwordValidator();

schema
  .is()
  .min(8) // Minimum 8 caractères
  .is()
  .max(20) // Maximum 20 caractères
  .has()
  .uppercase() // Le mot de passe doit avoir des majuscules
  .has()
  .lowercase() // Le mot de passe doit avoir des minuscules
  .has()
  .digits() // Le mot de passe doit avoir des chiffres
  .has()
  .not()
  .spaces(); // Le mot de passe ne doit pas avoir d'espace


exports.signup = (req, res, next) => {
  if (!schema.validate(req.body.password)) {
    //Test du format du mot de passe
    throw { error: "Merci de bien vouloir entrer un mot de passe valide !" };
  } else if (schema.validate(req.body.password)) {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) =>     {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = hash;

        const queryUsers = "INSERT INTO Users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
        const insertUsers = [firstname, lastname, email, password];
        connection.query(queryUsers, insertUsers, (error, rows, fields) =>
        {
            if(error)
            {
                return res.status(500).json({ error: "mysql" });
            }
            res.status(201).json({ message: 'Utilisateur créé !'});
        });
    })
    .catch(error => res.status(500).json({ error }));
}};


exports.login = (req, res, next) => {
 
  const email = req.body.email;        

  const insertLogin = [email];
  const queryLogin = ("SELECT id, firstname, lastname, email, password, role FROM Users WHERE email = ?");
  connection.query(queryLogin, insertLogin, (error, rows, fields) => {
  const result = rows[0];

    if (!result) {
      return res.status(401).json({
        error: "user non trouvé",
      });
    }
    const id = result.id;
    const firstname = result.firstname;
    const lastname = result.lastname;
    const role = result.role;
    const token = jwt.sign({ id: id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
    bcrypt
      .compare(req.body.password, result.password.toString('utf-8'))
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({
            error: "Mot de passe invalide",
          });
        }
      
        
         res.status(200).json({
          id: id,
          firstname: firstname,
          lastname: lastname,
          role: role,
          token: token
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: "Problème back end",
        });
      });
  });
};
