const { json } = require('sequelize');
const {Buskets} = require('../models/models');

class busketController {

    async setBusket(req, res) {
        try {
            const data = req.body;
            const busket = await Buskets.create(data);
            return res.json(busket);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new busketController();