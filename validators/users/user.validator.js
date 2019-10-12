module.exports = user => {
  
  const {email, name, password} = user;
  
  if (!email && !name && !password) {
  
    throw  new Error('jizn bol');
  }
};