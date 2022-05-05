const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.listCondidatController.getAll) // get All
router.post('/', controller.listCondidatController.create) // Add one
router.delete('/', controller.listCondidatController.deleteAll) // delete all
router.put('/:_id', controller.listCondidatController.update) // update one
router.get('/:_id', controller.listCondidatController.getOne) // get one
router.delete('/:_id', controller.listCondidatController.deleteOne) // delete one



module.exports = router;