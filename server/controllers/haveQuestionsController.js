const { json } = require('sequelize');
const {CorporativeClients} = require('../models/models');

class questionController {

    async setquestion(req, res) {
        try {
            const data = req.body;
            const question = await CorporativeClients.create(data);
            return res.json(question);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new questionController();