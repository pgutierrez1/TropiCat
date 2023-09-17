const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const fs = require("fs");
const configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const sqlite3 = require('sqlite3').verbose();

const { Sequelize } = require('sequelize');

const connectToDb = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

const scoreRoutes = require("./routes/scores.route");
const chartRoutes = require("./routes/charts.route");
const userRoutes  = require("./routes/users.route");

// avoid CORS issues
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/scores", scoreRoutes);
app.use("/charts", chartRoutes);
app.use("/users", userRoutes);


app.get("/", async (req, res) => {
    res.send("hiiiiii :3");

});
// CREATE
// READ
// UPDATE
// DESTROY
//
// app.route("/scores")
//     .get(async (req, res) => {
//         const scores = await Score.findAll();
//         res.json(scores);
//     })



app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
    // connectToDb();
});
