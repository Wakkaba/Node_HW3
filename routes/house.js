const express = require('express');

const router = express.Router();

const { insertHouse, findHousebyId } = require('../service/house.service');

const { createHouse} = require('../controllers');

const { house } = require('../middleware');


/* GET house page. */
 router.get('/', (req, res) =>{
    
     res.render('house.hbs',
    
         {title: 'House'});
 });

 router.post('/house', house.houseValidMiddleware, createHouse);


router.get('/patchHouse', (req, res) => {
    
    res.render('patchHouse.hbs',

    {title: 'House'});

});

// router.post('/insert', (req, res)=>{
    
//     insertHouse(req.body);
    
//     res.render('houseProfile.hbs',
    
//         {title:'New House'})
// });

//  router.get('/:id' , (req, res)=>{
    
//      const id = parseInt(req.params.id);
    
//      res.render('houseProfile.hbs',
    
//          {title: "House Інфо",
    
//              house: findHousebyId(id)});
//  });

router.post('/patchHouse', 

async (req,res,next) => {
    //midddleware
    const {id} = req.body;
    
    // begin validation
    const query = 'select * from House where  city=?, price=?, street=?';
    
    result = await provider.promise().query(query,[city, price, street]);

    if (result[0].length === 0) {
        
    }
    //end validation
    next(new Error('servak ne vpav just no house validation'))
    
} , async (req, res, next) => {
    //controller
    const {city, price, street } = req.body;
    
    const query = 'update house set city = ? , price = ? where street = ?'
    
    await provider.promise().query(query, [city,price,street]);
    
    res.json(req.body);
});

module.exports = router;
