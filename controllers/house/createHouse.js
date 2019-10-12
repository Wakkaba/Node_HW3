const {insertHouse} = require('../../service/house.service')

module.exports = async (req, res) => {
    
    await insertHouse(req.body);

    res.render('index.hbs',

        {title: 'House inserted'});
}; 