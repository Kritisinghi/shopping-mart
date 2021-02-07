const express = require('express');
const router = express.Router();
const { login } = require('./post');

router.post('/', login);

module.exports = router;
