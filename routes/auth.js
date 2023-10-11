const express = require('express');
const { matchedData } = require('express-validator');
const router = express.Router();
const {validatorRegister,validatorLogin} = require('../validators/auth');
const {encrypt, compare} = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { registerCtrl, loginCtrl } = require('../controllers/auth');

//Crear registros

// TODO: http://localhos:3000 /api/auth/login
// TODO: http://localhos:3000 /api/auth/register
router.post('/register',validatorRegister,registerCtrl);
     
 router.post('/login',validatorLogin,loginCtrl);     

   


module.exports = router