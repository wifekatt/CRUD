const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.electeurController.getAll) // get All
router.post('/', controller.electeurController.create) // Add one
router.delete('/', controller.electeurController.deleteAll) // delete all
router.put('/:_id', controller.electeurController.update) // update one
router.get('/:_id', controller.electeurController.getOne) // get one
router.delete('/:_id', controller.electeurController.deleteOne) // delete one



module.exports = router;