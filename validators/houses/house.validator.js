module.exports = house => {
    
    const {city, price, street} = house;
    
    if (!city && !price && !street) {
    
        throw  new Error('kapec s housom!');
    }
  };