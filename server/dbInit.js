const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

const Scores = require("./models/score.js")(sequelize, Sequelize.DataTypes);


const force = process.argv.includes("--force") || process.argv.includes("-f");

sequelize
  .sync({ force })
  .then(async () => {
    const scores = [
        Scores.upsert({
            score_id: "aa",
            user: "tropicat",
            chart_id: "aa",
            score: 100,
            accuracy: 100,

        })
    ];
    await Promise.all(scores);
    console.log("Database synced");
    sequelize.close();
  })
  .catch(console.error);
