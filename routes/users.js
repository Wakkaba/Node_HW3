const express = require('express');

const router = express.Router();

const { insertUser, viewAllUsers, findUser, findUserbyId } = require('../service/user.service');

const { createUser} = require('../controllers');

const { user } = require('../middleware');

router.get('/', (req, res) =>{
    
    res.render('index.hbs',
        
    {title: viewAllUsers()});
});
// // /1
// router.get('/:id' , (req, res)=>{
    
//     const id = parseInt(req.params.id);
    
//     res.render('userProfile.hbs',
        
//     {title: "Юзер Інфо",
    
//     user: findUserbyId(id)});
// });

router.post('/register', user.userValidMiddleware, createUser);

router.post('/login', (req,res) => {
    
    const {password, email} = req.body;
    
    if (!findUser(email, password)) {
        
        res.redirect('/login')
        
    
    }
    res.redirect('/users')
}
);

router.get('/patch', (req,res) => {
        
    res.render('patchUser.hbs',
        
        {title: 'Greetings'});
});



const {provider} = require('../dataBase');

router.post('/patch', 

async (req,res,next) => {
    //midddleware
    const {email} = req.body;
    
    // begin validation
    const query = ' select email from Person where email = ?';
    
    result = await provider.promise().query(query,[email])
    
    if (result[0].length === 0) {
        //throw new Error("snova servak ypal");
        //next(new Error('servak vpav?'))
    }
    //end validation
    next(new Error('servak ne vpav just no email validation'))
    
} , async (req, res, next) => {
    //controller
    
    const {email, name, password } = req.body;
    
    const query = 'update person set name = ? , password = ? where email = ?'
    
    await provider.promise().query(query, [name,password,email]);
    
    res.json(req.body);
});


module.exports = router;
