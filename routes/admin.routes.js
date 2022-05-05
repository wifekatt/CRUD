const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.adminController.getAll) // get All
router.post('/', controller.adminController.create) // Add one
router.delete('/', controller.adminController.deleteAll) // delete all
router.put('/:_id', controller.adminController.update) // update one
router.get('/:_id', controller.adminController.getOne) // get one
router.delete('/:_id', controller.adminController.deleteOne) // delete one



module.exports = router;