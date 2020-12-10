const express = require('express');
const router = express.Router();
const productsRouter = require('./products');
const authRouter = require('./auth');
const checkAuthUser = require('../middlewares/auth');

router.use('/auth', authRouter);

router.use(checkAuthUser);
router.use('/products', productsRouter);

module.exports = router;