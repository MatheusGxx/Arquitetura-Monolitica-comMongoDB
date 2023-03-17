const CustomersModel = require('../models/customers')
const { Criptografia } = require('../utils/password')


function index(req, res){
   res.render('register', {
      title:'Cadastro de Clientes'
  })
}


 async function add(req, res){ // Adicionando Registro 
   const { // Chamando o servidor e forçando ele a ler os itens enviados do formulario
    name,
    age,
    email,
    password,
   } = req.body 
   
   const passwordcrypto = Criptografia(password)

   const register = new CustomersModel({  // Mostrando que tipo de informaçoes iram ir atraves do formulario usando o Modal.
    name,
    age,
    email,
    password:  await passwordcrypto,
   })
   register.save()
   res.render('register',{
      title: 'Cadastro de clientes',
      message: 'Cadastro realizado com sucesso'
   })
}

   async function listUsers(req, res){
      const Users = await  CustomersModel.find() // pegando um metodo do mongoose que esta dentro do customersModel aonde nos da o poder de selecionar determinado usuario ou todos usuarios, () = Todos os usuarios
      res.render('listUsers',{
         title: 'Listagem de usuarios',
         users: Users
      })
   }
module.exports = {
 index,
 add,
 listUsers,
}
