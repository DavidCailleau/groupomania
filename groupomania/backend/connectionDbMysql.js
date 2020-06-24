const mysql = require("mysql");

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "groupomania_intra"
  });
  connection.connect ((err) => {
    if (err) throw err;
    console.log ('Connecté!');
  });

  module.exports = connection;