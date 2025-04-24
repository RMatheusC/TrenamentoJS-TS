const express = require('express');
const UserModel = require('../Modules/src/Models/user.model');
const app = express();

app.use(express.json());
const port = 8080;

app.get('/home', (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello World!</h1>");
});

app.get('/users', async (req, res) => {
    try {
       const users = await UserModel.find({});
       
       res.status(200).send(error.message);
    } catch (error) {
       return res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res)=> {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);     
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));