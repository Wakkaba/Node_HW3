const {houseValidator} = require('../../validators');

module.exports = (req, res, next) => {

    try {
       // console.log("i am here");
        const house = req.body;

        houseValidator(house);

        next()
    } catch (e) {

        res.status(400).json(e.message);
    }
};