const Router = require('koa-router')
const controllerCliente = require("../controllers/cliente.controller")
const router = new Router({prefix:'cliente'})

router.get("/validar-morosidad/:id", controllerCliente.obtenerDatos)

module.exports = router