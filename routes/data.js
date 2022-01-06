const router = require('express').Router();
const userLogin = require('../controllers/dataControl')


router.post('/', userLogin.userLogin);

module.exports = router