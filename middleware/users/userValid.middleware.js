const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {

    try {
       // console.log("i am here");
        const user = req.body;

        userValidator(user);

        next()
    } catch (e) {

        res.status(400).json(e.message);
    }
};