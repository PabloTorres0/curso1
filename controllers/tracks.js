const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');  
const {handleHttpError}= require('../utils/handleError'); 

/*
OBTENER LISTA DEL CONTROOLADOR 
@param {*} req 
@param {*} res
*/
const getItems = async  (req, res)=>{

    try {
          const user=req.user
          const data = await  tracksModel.find({});
          res.send({data,user});
        
    } catch (error) {
        
        handleHttpError(res,'ERROR_GET_ITEMS',403)
    }
};

/*
OBTENER UN DETALLE 
@param {*} req
@param {*} res
*/
const getItem = async (req, res)=>{
    try {

        req=matchedData(req);
        const {id}=req;
        const data = await  tracksModel.findById(id);
        res.send({data});
        
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

/*
INSERTAR UN REGISTRO 
@param {*} req
@param {*} res
*/
const createItem = async (req, res)=>{

    try {
        const body = matchedData(req)           
        const data = await tracksModel.create(body);
        res.send({data});
        
    } catch (error) {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }

};

/*
ACTUALIZAR UN REGISTRO 
@param {*} req
@param {*} res
*/
const updateItems = async (req, res)=>{
    try {
        const {id,...body} = matchedData(req)          
        const data = await tracksModel.findOneAndUpdate(body,id);
        res.send({data});
        
    } catch (error) {
        handleHttpError(res,'ERROR_UPDATE_ITEMS')
    }
};

/*
ELIMINAR UN REGISTRO 
@param {*} req
@param {*} res
*/
const deleteItems = async (req, res)=>{
    try {

        req=matchedData(req);
        const {id}=req;
        const data = await  tracksModel.delete({_id:id});
        res.send({data});
        
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
}; 

module.exports = {getItems, getItem, createItem, updateItems, deleteItems}