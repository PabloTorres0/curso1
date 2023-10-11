const express = require('express');
const coustomHader = require("../middleware/customHeader")
const authMiddleware = require('../middleware/session')
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')
const {getItems,getItem,createItem,updateItems,deleteItems} = require('../controllers/tracks');
const checkRol= require("../middleware/rol")


// TODO https://localhost/tracks GET POST DEILET PUT

//Lista los items
router.get('/',authMiddleware,checkRol(["admin"]), getItems);
//Obtener detalle de item
router.get('/:id',authMiddleware,validatorGetItem ,getItem)
//Crear registros
router.post('/',authMiddleware,checkRol(["admin"])  ,validatorCreateItem, createItem);  
//Modificar registros
router.put('/:id',authMiddleware,validatorGetItem, validatorCreateItem, updateItems);
//Eliminar
router.delete('/:id',authMiddleware,validatorGetItem, deleteItems);
   


module.exports = router