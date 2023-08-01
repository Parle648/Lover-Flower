const Router = require('express');
const router = new Router();
const haveQuestions = require('../controllers/haveQuestionsController');

router.post('/', haveQuestions.setquestion);

module.exports = router;