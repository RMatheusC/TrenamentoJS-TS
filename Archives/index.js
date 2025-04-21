// require("./Modules/path");
// require("./Modules/fs");
// require("./Modules/http");
// require("./Modules/express");
const {Person} = require("./person");
// const dotenv = require('dotenv');
const dotenv = require('dotenv'); //verificar erro - não está respeitando o .env
dotenv.config();
const connectToDatabase = require('./Modules/src/database/connect');


// console.log('teste:', process.env.MONGODB_USERNAME);

dotenv.config();

connectToDatabase();


// const person = new Person("Matheus");
