const {provider} = require('../dataBase');

exports.insertHouse = async (house) => {

    const {city, price, street} = house;

    const query = 'insert into House(city,price,street) values(?,?,?);';

    await provider.promise().query(query,[city, price, street]);
};
// exports.insertHouse = (house) => {
    
//     const index = houses.length + 1;
    
//     houses.push({ 'id':index  ,...house});
    
//     console.log(houses);

// };

exports.findHousebyId = (id) => houses.find((h) => h.id === id);