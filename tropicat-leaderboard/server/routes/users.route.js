const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("database", "user", "password", {    
  host: "localhost",    
  dialect: "sqlite",    
  logging: false,    
  storage: "database.sqlite",    
});
const User = require('../models/user')(sequelize, Sequelize.DataTypes);

router.use(async (req, res, next) => {
    next();
});

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});
router.get('/:id', async (req, res) => {
    // console.log('user_id ' + req.params.id + ": ");
    const user = await User.findOne({ where: { user_id: req.params.id } });
    res.json(user);
});
router.post('/new', async (req, res) => {
    console.log(req.body.user_id);
    // User.create({
    //     user_id: req.body.user_id,
    //     name: req.body.name,
    //     score_id_collection: req.body.score_id_collection,
    // })
    
});
router.post('/:id/delete', async (req, res) => {
    const user = await User.destroy({ where: { user_id: req.params.id }, force: true });
    console.log("deleted " + req.params.id);
})

module.exports = router;
