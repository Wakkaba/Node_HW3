let express = require('express');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
    
    res.render('index.hbs',
        
        {title: 'Greetings'});

});


module.exports = router;
