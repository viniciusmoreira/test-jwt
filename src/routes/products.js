const express = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = express.Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.list);

module.exports = productsRouter;