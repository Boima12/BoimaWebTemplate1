const express = require('express')
const router = express.Router()

const {
    getTower
} = require('../controllers/towers.js')

router.route('/').get(getTower)

module.exports = router