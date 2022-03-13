const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/sitecontroller')

router.get('/search',siteController.search)
router.get('/', siteController.home)

module.exports = router