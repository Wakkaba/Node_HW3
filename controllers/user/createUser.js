const { insertUser} = require('../../service/user.service');

module.exports = async (req, res) => {
    
    await insertUser(req.body);

    res.render('index.hbs',

        {title: 'User inserted'});
}; 