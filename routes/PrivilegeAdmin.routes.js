const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.PrivilegeAdminController.getAll) // get All
router.post('/', controller.PrivilegeAdminController.create) // Add one
router.delete('/', controller.PrivilegeAdminController.deleteAll) // delete all
router.put('/:_id', controller.PrivilegeAdminController.update) // update one
router.get('/:_id', controller.PrivilegeAdminController.getOne) // get one
router.delete('/:_id', controller.PrivilegeAdminController.deleteOne) // delete one



module.exports = router