const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database", "user", "password", {    
  host: "localhost",    
  dialect: "sqlite",    
  logging: false,    
  storage: "database.sqlite",    
});
const Chart = require('../models/chart')(sequelize, Sequelize.DataTypes);

router.use(async (req, res, next) => {
    next();
});

router.get('/', async (req, res) => {
    const charts = await Chart.findAll();
    res.json(charts);
});
router.get('/:id', async (req, res) => {
    console.log('chart_id ' + req.params.id + ": ");
    const chart = await Chart.findOne({ where: { chart_id: req.params.id } });
    res.json(chart);
});
router.post('/new', async (req, res) => {
    console.log(req.body);
    Chart.create({
        chart_id: req.body.chart_id,
        name: req.body.name,
        artist: req.body.artist,
        plays: req.body.plays,
    })
    
});


module.exports = router;
