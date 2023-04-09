const { redeemTokens } = require('../controller/tasks')
const express = require('express')
const router = express.Router()

router.route('/').post(redeemTokens)

module.exports = router