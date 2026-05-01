// Aqui es donde definimos las rutas y a que controlador apuntan

const router = require('express').Router()
const pokeneasController = require('../controllers/pokeneas.controller')

router.get('/' , pokeneasController.index)
router.get('/neaJson' , pokeneasController.showJson)

module.exports = router // Esta linea de codigo es la que nos deja importar el codigo. Por eso podemos hacer el require en otro archivo