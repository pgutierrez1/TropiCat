const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database", "user", "password", {    
  host: "localhost",    
  dialect: "sqlite",    
  logging: false,    
  storage: "database.sqlite",    
});
const Score = require('../models/score')(sequelize, Sequelize.DataTypes);

router.use(async (req, res, next) => {
    next();
});

router.get('/', async (req, res) => {
    const scores = await Score.findAll();
    console.log(scores);
    res.json(scores);
});
router.get('/:id', async (req, res) => {
    const score = await Score.findOne({ where: { score_id: req.params.id } });
    res.json(score);
});
router.post('/new', async (req, res) => {
    console.log(req.body);
    Score.create({
        score_id: req.body.score_id,
        user_id: req.body.user_id,
        chart_id: req.body.chart_id,
        score: req.body.score,
        accuracy: req.body.accuracy,
    })
    
});

module.exports = router;
