'use strict'

const express = require('express');

const server = express();

server.use(express.static('./public'));

const PORT = process.env.PORT || 3000; 

server.get('/Hanaa' ,(request,response)=>{
    response.send('Hello this is Hanaa APP')
});


server.get('/food',(request,response)=>{
    let myFavFood = [
        {food:'Mansaf'},
        {food:'Kubbeh'},
        {food:'Makmorah'},
        {food:'Tabboleh'},
        {food:'Yalanji'}
    ];
    response.json(myFavFood);
})


server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})