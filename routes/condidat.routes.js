const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.condidatController.getAll) // get All
router.post('/', controller.condidatController.create) // Add one
router.delete('/', controller.condidatController.deleteAll) // delete all
router.put('/:_id', controller.condidatController.update) // update one
router.get('/:_id', controller.condidatController.getOne) // get one
router.delete('/:_id', controller.condidatController.deleteOne) // delete one



module.exports = router;