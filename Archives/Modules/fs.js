const fs = require('fs');
const path = require('path');

//Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if(error){
//         return console.log('Erro:', error);
//     }
//     else{
//         return console.log('Pasta criada com sucesso!');
//     }
// });

//Criar um arquivo
fs.writeFile(
    path.join(__dirname, "/test", "teste.txt"),
    "Hello node!",
    (error) => {
        if(error) {
            return console.log("Erro: ", error);
        }
        console.log("Arquivo criado com sucesso!");

        //adicionar à um arquivo
        fs.appendFile(
            path.join(__dirname, "/test", "teste.txt"), 
            "  Hello World!",
            (error) => {
                if(error){
                    return console.log("Erro: ", error)
                }
                console.log("Arquivo modificado com sucesso!");
            });

        //ler arquivo
        fs.readFile(
            path.join(__dirname, "/test", "teste.txt"),
            "UTF-8",
            (error, data) => {
                if(error){
                    console.log("Erro: ", error);
                }
                console.log(data)
            }
        )
    }
)


   
