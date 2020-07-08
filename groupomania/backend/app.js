const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet"); // Plugin qui permet de protéger l'application de certaines vulnérabilités en configurant de manière appropriée des en-têtes HTTP.
//protection contre les attaques de type cross-site scripting et autres injections intersites
//Protection contre les attaques de sniffing et clickjacking

const userRoutes = require("./routes/user");
const profilRoutes = require("./routes/profil");
const messageRoutes = require("./routes/message");
const articleRoutes = require("./routes/article");
const commentaireRoutes = require("./routes/commentaire");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use (helmet()); // L'application utilise toutes les protections helmet
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/commentaire", commentaireRoutes);
app.use("/api/profil", profilRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/article", articleRoutes);

module.exports = app;
