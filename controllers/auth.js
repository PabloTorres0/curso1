const {matchedData} = require("express-validator")
const {encrypt,compare} = require("../utils/handlePassword")
const {tokenSign} = require("../utils/handleJwt") 
const {usersModel} = require("../models");
const {handleHttpError} =require('../utils/handleError');

/*
Este controlador es el encargado de registrar el usuario
*/
const registerCtrl = async (req,res) => {
    try {  
        req = matchedData(req)
        const password= await encrypt(req.password)
        const body = {...req,password}
        const dataUser= await usersModel.create(body)
        dataUser.set('password',undefined,{strict: false})
        
        const data = {
            token:  await tokenSign(dataUser),
            dataUser: dataUser,
        }
        console.log(data)
        
        res.send({data})
        
    } catch (error) {
        handleHttpError(res, "Error el ingresar usuario")        
    }
}

/*
 Este controlador es el encargado de loguear a una persona 
*/
const loginCtrl = async (req, res) =>{

    try {
        
        req= matchedData(req)

        const user = await usersModel.findOne({email:req.email}).select('password name role email')
        if (!user){
            handleHttpError(res, "USUARIO_NO_EXIST",404)
            return
        }

        const hasPassword = user.get('password')
        const check = await compare(req.password,hasPassword)

        if (!check){
            handleHttpError(res, "INVALID_PASSWORD",401)
            return
        }

        user.set('password', undefined,{strict:false})
        const data={
            token:await tokenSign(user),
            user
        }

        res.send({data})

    } catch (error) {
        console.log(error)
        handleHttpError(res, "Error User Login",404)
    }

}

module.exports ={registerCtrl, loginCtrl}