const {provider} = require('../dataBase');

exports.insertUser = async (user) => {

    const {email, password, name} = user;

    const query = 'insert into Person(name,password,email) values(?,?,?);';

    await provider.promise().query(query,[name, password, email]);
};

exports.viewAllUsers = async () => {
    const query = 'select id, name, email from Person';

    const dbResponce = await provider.promise().query(query);
    
    console.log(dbResponce);

    return dbResponce.map((u) => JSON.stringify(u));
};

exports.findUser = (email, password) => users.find((u) => 
u.email === email && u.password === password);

exports.findUserbyId = (id) => users.find((u) => u.id === id);

