const bcrypt = require('bcrypt')

async function Criptografia(pwd){ // Criptografando 

    const salt = await bcrypt.genSalt() // O salt é um conjunto de caratereces feito para criptografar

    const senhaCriptografada = await bcrypt.hash(pwd, salt) 

    return senhaCriptografada
}

module.exports = {
    Criptografia
}
