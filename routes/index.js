const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname; 
const remuveExtension = (filName)=>{
    return filName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = remuveExtension(file) //TODO index traks  users storage 
    if (name !== 'index'){
        router.use(`/${name}`,require(`./${file}`)) //TODO http :/localhost:3000/api/tracks
    }
} 
) 


module.exports = router