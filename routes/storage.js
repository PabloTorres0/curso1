const uploadMiddelware = require('../utils/handleStorage');
const {createItems} = require('../controllers/storage');
const express = require('express');
const router = express.Router();
const {getItems, getItem, updateItem, createItem, deleteItems} = require('../controllers/storage');
const {validatorGetItem} = require('../validators/storage');
//TODO http://localhost:3000/storage



router.get("/",getItems)
router.get("/:id",validatorGetItem ,getItem)
router.delete("/:id",validatorGetItem, deleteItems)
router.post("/",uploadMiddelware.single("myfile"),createItem)


module.exports = router