const router = require('express').Router()

const CustomersConstroller = require('../controllers/controllers')
const IndexController = require('../controllers/index')


// rotas
router.get('/', IndexController.index)


//Registro
router.get('/register', CustomersConstroller.index)
router.post('/register/add', CustomersConstroller.add)    //CONTROLLER  - Responsavel por receber os dados salvar eles receber no banco de dados e devolver uma resposta


// Listar usuarios

router.get('/list', CustomersConstroller.listUsers)
    
// Editar Usuarios

router.get('/edit', CustomersConstroller.indexEdit)
router.post('/edit/:id', CustomersConstroller.edit)

// Removendo Usuarios

router.get('/remove/:id', CustomersConstroller.remover)


module.exports = router


