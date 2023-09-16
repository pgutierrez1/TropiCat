const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const fs = require("fs");
const configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const sqlite3 = require('sqlite3').verbose();
// import { Database } from "bun:sqlite";

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});
const Score = require("./models/score")(sequelize, Sequelize.DataTypes);

// avoid CORS issues
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectToDb = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

app.get("/", async (req, res) => {
    res.send("hiiiiii :3");

});

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
    // connectToDb();
});
