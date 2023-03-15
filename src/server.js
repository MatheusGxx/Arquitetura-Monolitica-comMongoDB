const express = require('express')
const mongodb = require('mongoose')
const path = require('path')

const app = express()

// Criando um template engine (EJS) - Por si só ele ja defini os arquivos estaticos (HTML)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos publicos = CSS e Javascript
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded({ extended: true})) // recebendo posts de formulario  (Metodo Post)


//rotas

app.get('/',(req, res) =>{
    res.render('index',{
        title:'Project MongoDB'
    })
})


// 404 error (not found) - Rota nao existe

app.use((req, res) =>{
    res.send('Pagina não encontrada')
})

// Chamando o Servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(` Server is listening on port ${port}`))


