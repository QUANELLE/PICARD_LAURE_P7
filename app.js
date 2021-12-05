"use strict";
const express = require("express");
const helmet = require("helmet");
const {Sequelize} = require("sequelize");
const app = express();

// const path = require("path");
let sequelize
sequelize = new Sequelize(
    'groupomania',
     'root',
      '',
      {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
 sequelize.authenticate()
  .then(() => console.log("Connexion à BDD réussie !"))
  .catch(() => console.log("Connexion à BDD échouée !"));

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
app.use(helmet());

app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/api/auth", userRoute);



module.exports = app;
