const { getProjects, getProjectById, postProject, patchProject, deleteProject } = require('../services/projects')

function getAllProjectsController( req, res) {
    try {
        const projects = getProjects()
        res.send(projects)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getProjectByIdController(req, res) {
    try {
        const id = req.params.id

        if(id) {
            const project = getProjectById(id)
            res.send(project)
        } else {
            res.status(422)
            res.send('Invalid ID')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postProjectController(req, res) {
    try {

        const project = req.body
        
        if(req.body) {
            postProject(project)
            res.status(201)
            res.send('Projeto criado com sucesso!')
        } else {
            res.status(422)
            res.send("Preencha os campos corretamente!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchProjectController(req, res) {
    try {
        const id = req.params.id

        if(id) {
            const body = req.body
            patchProject(body, id)
            res.status(200)
            res.send('Projeto modificado com sucesso!')
        } else {
            res.status(422)
            res.send('Invalid ID')
        }
    } catch (error) {
        res.status(500)
        res.sendo(error.message)
    }
}

function deleteProjectController(req, res) {
    try {
        const id = req.params.id

        if(id) {
            deleteProject(id)
            res.status(200)
            res.send('Projeco deletado com sucesso!')
        } else {
            res.status(422)
            res.send('Invalid ID')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getAllProjectsController,
    getProjectByIdController,
    postProjectController,
    patchProjectController,
    deleteProjectController
}