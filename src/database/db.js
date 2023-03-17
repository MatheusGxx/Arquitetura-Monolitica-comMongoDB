const MongoDB = require('mongoose')

function connect(){
    MongoDB.connect('mongodb://localhost:27017/')

    const db = MongoDB.connection
    
    
    db.once('open', () => { // Avisando que deu tudo certo e conectou ao banco de dados
        console.log('Connect to database')
    })
    
    db.on('error', console.error.bind(console, 'connection error:'))  // Avisando que deu algum erro
}

module.exports = {
    connect
}
