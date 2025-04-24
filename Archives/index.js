const {Person} = require("./person");
const dotenv = require('dotenv');
const express = require('./Modules/express');
const connectToDatabase = require('./Modules/src/database/connect');
dotenv.config();
connectToDatabase();