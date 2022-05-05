const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.voteController.getAll) // get All
router.post('/', controller.voteController.create) // Add one
router.delete('/', controller.voteController.deleteAll) // delete all
router.put('/:_id', controller.voteController.update) // update one
router.get('/:_id', controller.voteController.getOne) // get one
router.delete('/:_id', controller.voteController.deleteOne) // delete one



module.exports = router;