const express = require('express');
const router = express.Router();

const TerminalController = require('../controller/TerminalController');

router.get('/', TerminalController.readAll);



module.exports = router;