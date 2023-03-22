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
         users:Users
      })
}

async function indexEdit(req, res){  // lendo e pegando o id
   const { id } = req.query // lendo o id do usuario no banco de dados e na url

   const user = await CustomersModel.findById(id) // pegando o id do usuario no banco de dados

   res.render('edit',{
      title: 'Ediçao de clientes',
      user, //renderizando o id do usuario na tela
   })
}


 async function edit(req,res){
   const { // Chamando o servidor e forçando ele a ler os itens enviados do formulario
      name,
      age,
      email,
     } = req.body

     const { id } = req.params // Lendo o ID do formulario ( Params é para ler o ID do formulario e query é para ler o ID da URL)

     const user = await CustomersModel.findById(id) // pegando o IP do forulario
     

     // Alterando as mudanças ja feitas pelo usuario no formulario
     user.name = name
     user.age = age
     user.email = email
     user.save()

     res.render('edit',{ // Após alterar as mudanças do usuario no formulario, rendiza a pagina de edit com uma mensagem encima do formulario.
      title: 'Ediçao feita com sucesso',
      user, //renderizando o id do usuario na tela
      message: 'Usuario Alterado com sucesso'
   })
}
async function remover(req, res){
 const { id }  = req.params
 
  const remover = await CustomersModel.deleteOne({ _id: id})
   
  console.log(remover)

  if(remover) {
   res.redirect('/list')
 }
  else{
   res.send('Erro ao apagar o cliente')
 }
}

 
module.exports = {   
 index,
 add,
 listUsers,
 indexEdit,
 edit,
 remover,
}
