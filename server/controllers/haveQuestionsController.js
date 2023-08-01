const { json } = require('sequelize');
const {HaveAQuestions} = require('../models/models');

class questionController {

    async setquestion(req, res) {
        try {
            const data = req.body;
            const question = await HaveAQuestions.create(data);
            return res.json(question);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new questionController();