const { randomUUID } = require('crypto')
const fs = require('fs')
const projectsJson = JSON.parse(fs.readFileSync('projects.json'))

function getProjects() {
    return projectsJson
}

function getProjectById(id) {
    const projects = projectsJson

    const projectFilter = projects.filter(project => project.id === id)
    return projectFilter[0]
}

function postProject(project) {

    project.cost = 0
    project.services = []
    project.id = randomUUID()

    const projects = projectsJson
    const newListProject = [ ...projects, project]
    fs.writeFileSync('projects.json', JSON.stringify(newListProject)) 
}

function patchProject(modificacoes, id) {
    let projects = projectsJson
    const indiceModificado = projects.findIndex(project => project.id === id)
    const conteudoModificado = { ...projects[indiceModificado], ...modificacoes}

    projects[indiceModificado] = conteudoModificado

    fs.writeFileSync('projects.json', JSON.stringify(projects))
}

function deleteProject(id) {
    let projects = projectsJson
    const projectDeleted = projects.filter(project => project.id !== id)
    fs.writeFileSync('projects.json', JSON.stringify(projectDeleted))
}

module.exports = {
    getProjects,
    getProjectById,
    postProject,
    patchProject,
    deleteProject
}