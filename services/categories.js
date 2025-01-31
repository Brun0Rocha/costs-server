const fs = require('fs')

function getCategories() {
    return JSON.parse(fs.readFileSync('categories.json'))
}

module.exports = {
    getCategories,
}