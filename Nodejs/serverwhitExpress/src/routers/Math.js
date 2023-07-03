const express = require('express')

const path = 'api/cursos/matematicas'

const routerMath = express.Router()

const controller = require('../controllers/Math')

// Cursos de matematica

routerMath.get(`/${path}`, controller.getData)

routerMath.get(`/${path}/:tema`, controller.getDataTheme)

module.exports = routerMath
