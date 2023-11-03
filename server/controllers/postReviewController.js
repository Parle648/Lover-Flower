const { json } = require('sequelize');
const {Reviews} = require('../models/models');

class postReviewController {
    async createReview(req, res) {
        try {
            const review = req.body;
            const createdReview = await Reviews.create(review);
            return res.json(createdReview);
        } catch (error) {
            return res.status(500).json({ error: `${error}` });
        }
    } 

    async getReview(req, res) {
        try {
            const reviews = await Reviews.findAll();
            return res.json(reviews)
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new postReviewController();