const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask)
router.get('/', TaskController.ShowTask)

module.exports = router