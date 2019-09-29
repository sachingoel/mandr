'use strict'
const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user');
const validationSchemas = require('./../validationSchemas/user');
const enableAuth = require('./../utils/authUtils').authRequired;

let {celebrate}= require('celebrate');

router.post('/register',celebrate(validationSchemas.registerUser),userController.registerUser);
router.post('/login',celebrate(validationSchemas.login),userController.userLogin);
router.put('/profile',enableAuth,celebrate(validationSchemas.updateuser),userController.userUpdate);

module.exports = router;
