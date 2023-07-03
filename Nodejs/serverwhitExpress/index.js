
const express = require('express')

const app = express()

const { curse } = require('./src/data/curso')

const PUERTO = process.env.PORT || 3001

const routerMath = require('./src/routers/Math')

const routerProgramming = require('./src/routers/programing')

/* creacion del ruter, para que halla menos repeticion de codigo. */

app.use(routerMath)
app.use(routerProgramming)

// Routing

app.get('/', (req, res) => {
  res.send('<h1>MY FIRST SERVER WHIT NODE.JS AND EXPRESS </h1>')
})

app.get('/api/cursos', (request, response) => {
  response.json(curse)
})

app.listen(PUERTO, () => {
  console.log(`Server is listening on the port ${PUERTO}...`)
})
