const { getCategories } = require('../services/categories')

function getAllCategories( req, res) {
    try {
        const categories = getCategories()
        res.send(categories)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getAllCategories,
}