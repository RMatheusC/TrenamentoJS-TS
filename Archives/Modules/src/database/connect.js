const mongoose = require('mongoose');

const connectToDatabase = async() =>{
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@treinamentonodejs.xkarkn3.mongodb.net/database?retryWrites=true&w=majority&appName=TreinamentoNodeJS`);
        console.log("Conectado com sucesso!");

    } catch(error){
        console.log("Erro na conexão: ", error)
    }
};

module.exports = connectToDatabase;