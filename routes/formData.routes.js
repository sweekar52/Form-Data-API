const router = require('express').Router()

const controller = require('../controllers/formData.controllers')

router.post('/users', controller.add)
router.get('/users', controller.read)

module.exports = router