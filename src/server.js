const express = require('express')
const path = require('path')
const db = require('./database/db')
const routes = require('./routes')
const app = express()

db.connect()



// Criando um template engine (EJS) - Por si só ele ja defini os arquivos estaticos (HTML)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos publicos = CSS e Javascript
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded({ extended: true})) // recebendo posts de formulario  (Metodo Post)

// Definindo as rotas
app.use('/', routes)

// 404 error (not found) - Rota nao existe

app.use((req, res) =>{
    res.send('Pagina não encontrada')
})

// Chamando o Servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(` Server is listening on port ${port}`))


