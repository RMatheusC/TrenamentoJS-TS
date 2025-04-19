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
fs.writeFile(path.join(__dirname, '/test', 'teste.txt'), 'hello node!', 
(error) => {
    if(error){
        return console.log('Erro:', error);
    }
        return console.log('Arquivo criado com sucesso!');

    //Adicionar à um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'teste.txt'), 'Hello World', 
    (error)=>{
        if(error){
            return console.log('Erro:', error);
        }
            return console.log('Informação adicionada com sucesso!');
        }
    );
        //Ler arquivo
    fs.readFile(path.join(__dirname, '/test', 'teste.txt'), 'utf8' ,(error)=>{
        if(error){
            return console.log('Erro:', error);
        }
            return console.log('Informação lida com sucesso!');
     })

});


   
