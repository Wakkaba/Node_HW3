let express = require('express');

let router = express.Router();

router.get('/', (req, res, next) =>{
    
    res.render('login.hbs',
        
        {title: 'Sign in'});
});

module.exports = router;
