const express = require('express');
const router = express.Router();

const InfoController = require('../controller/InfoController');

router.get('/', InfoController.readAll);
router.post('/', InfoController.create);



module.exports = router;