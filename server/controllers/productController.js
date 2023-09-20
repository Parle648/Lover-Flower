const { json } = require('sequelize');
const {Products} = require('../models/models');

class productController {

    async getProducts(req, res) {
        try {
            const products = await Products.findAll();
            return res.json(products);
        } catch(err) {
            return json(`${err}`)
        }
    } 
    
    async getSortedProducts(req, res) {
        try {
            const {string} = req.params; 
            const products = await Products.findAll();
            return res.json(products.filter(obj => obj.categories.includes(string.slice(1))));
        } catch(err) {
            return json(`${err}`)
        }
    } 

    async getProduct(req, res) {
        try {
            const {id} = req.params;
            const prodArray = await Products.findByPk(id);
            return res.json(prodArray);
        } catch(err) {
            return json(`${err}`)
        }
    }
    
    async setProduct(req, res) {
        try {
            const data = req.body;
            const product = await Products.create(data);
            return res.json(product);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new productController();