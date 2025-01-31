const { Router } = require('express')
const { getAllProjectsController, getProjectByIdController, postProjectController, patchProjectController, deleteProjectController } = require('../controllers/projects')

const router = Router()

router.get('/', getAllProjectsController )

router.get('/:id', getProjectByIdController)

router.post('/', postProjectController)

router.patch('/:id', patchProjectController)

router.delete('/:id', deleteProjectController)

module.exports = router
