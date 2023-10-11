const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET 

/*
Debes pasar el objeto del usuario
*/  
const tokenSign = async(user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role    
    },
    JWT_SECRET,
    {
        expiresIn:"2h"
    } 
    )
    
    return sign
}
/*
Pasar Token de secion de JWT
*/
const verifyToken = async(tokenJwt) => {
    try {
        return jwt.verify(tokenJwt,JWT_SECRET)
        
    } catch (error) {
        console.log("+++++++++++errorToken")
        return null
        
        
    }
}

module.exports ={tokenSign, verifyToken}