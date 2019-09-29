'use strict'
const express = require('express');
const router = express.Router();
const msgController = require('./../controllers/message');
const enableAuth = require('./../utils/authUtils').authRequired;


router.post('/encrypt',enableAuth,msgController.sendMessages);

module.exports = router;
