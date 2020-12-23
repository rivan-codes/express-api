var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');
// const User = require('../models/Users');

/* GET users listing. */
router.get('/', users.list)
    .get('/detail/:id(\\d+)', users.detail)
    .get('/formUpdate/:id', users.formUpdate)
    .post('/update', users.update)
    .delete('/:id', users.delete);

module.exports = router;