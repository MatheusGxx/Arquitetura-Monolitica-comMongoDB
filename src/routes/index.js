const router = require('express').Router()

// rotas
router.get('/',(req, res) => {
    res.render('index',{
        title:'Project MongoDB'
    })
})


module.exports = router