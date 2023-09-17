const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

const Scores = require("./models/score.js")(sequelize, Sequelize.DataTypes);
const Charts = require("./models/chart.js")(sequelize, Sequelize.DataTypes);
const Users  = require("./models/user.js")(sequelize, Sequelize.DataTypes);


const force = process.argv.includes("--force") || process.argv.includes("-f");

sequelize
  .sync({ force })
  .then(async () => {
    const scores = [
        Scores.upsert({
            score_id: "aa",
            user_id: "cibba",
            chart_id: "aa",
            username: "tropicat",
            score: 90,
            accuracy: 90,

        }),
        Scores.upsert({
            score_id: "aa",
            user_id: "abba",
            chart_id: "aa",
            username: "john",
            score: 90,
            accuracy: 90,
        }),
    ];
      const charts = [
          Charts.upsert({
            chart_id: "11",
            name: "Coconut Nyal",
            artist: "uhhhh",
            plays: 500
          }),
          Charts.upsert({
            chart_id: "111",
            name: "FREEDOM DiVE",
            artist: "xi",
            plays: 500000
          }),
      ];
      const users = [
          Users.upsert({
            user_id: "abba",
            name: "tropicat",
            score_id_collection: `{'aa', 'bb'}`,
          })
      ]
    await Promise.all(scores);
    await Promise.all(charts);
    await Promise.all(users);
    console.log("Database synced");
    sequelize.close();
  })
  .catch(console.error);
