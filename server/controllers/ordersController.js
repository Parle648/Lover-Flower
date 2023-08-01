const { json } = require('sequelize');
const {Orders} = require('../models/models');

class ordersController {

    async setOrder(req, res) {
        try {
            const data = req.body;
            const product = await Orders.create(data);
            return res.json(product);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new ordersController();