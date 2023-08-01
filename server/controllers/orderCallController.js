const { json } = require('sequelize');
const {OrderCall} = require('../models/models');

class orderCallController {

    async setCall(req, res) {
        try {
            const data = req.body;
            const call = await OrderCall.create(data);
            return res.json(call);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new orderCallController();