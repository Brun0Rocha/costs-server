const express = require('express')
const routeProjects = require('./routes/projects')
const routeCategorie = require('./routes/categorias')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/projects', routeProjects)
app.use('/categories', routeCategorie)

const port = 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})