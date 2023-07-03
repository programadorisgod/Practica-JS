const express = require('express')

const routerProgramming = express.Router()

// Para poder acceder a los datos sin notacion de punto e importalo como objeto.
const { programming } = require('../data/curso').curse

const controller = require('../controllers/Programming')

const path = 'api/cursos/programacion'

// Middleware nos permite procesar la solicitud y se ejecuta despues y antes.
routerProgramming.use(express.json())

// ruta de programacion
routerProgramming.get(`/${path}`, controller.getData)

// Params
routerProgramming.get(`/${path}/:lenguaje`, controller.getDataLanguage)

routerProgramming.get(`/${path}/:lenguaje/:nivel`, controller.getDataLevel)

// Metodo post
routerProgramming.post('/', (req, res) => {
  const newCourse = req.body
  programming.push(newCourse)

  res.send(programming)
})

// Metodo put

routerProgramming.put('/:id', (req, res) => {
  const curseUpgrade = req.body
  const id = Number(req.params.id)

  const index = programming.findIndex(curse => curse.id === id)
  if (index >= 0) {
    programming[index] = curseUpgrade
  }
  // COLOCAR CODIGOS DE ESTADOS
  res.status(200).send(programming)
})

routerProgramming.patch('/:id', (req, res) => {
  const newInfo = req.body
  const id = Number(req.params.id)
  const index = programming.findIndex(curso => curso.id === id)
  if (index === 0) {
    const curseUpgrade = programming[index]
    // objeto que vamos a modificar y otro objeto con key y values;
    Object.assign(curseUpgrade, newInfo)
  }

  res.send(programming)
})

routerProgramming.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  const index = programming.findIndex(curso => curso.id === id)
  if (index >= 0) {
    programming.splice(index, 1)
  }

  res.send(programming)
})

module.exports = routerProgramming
