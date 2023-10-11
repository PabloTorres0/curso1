const bcrypt = require("bcryptjs");

const encrypt = async(passwordPlain) =>{
    const hash = await bcrypt.hash(passwordPlain,10)
    return hash

}

const compare = async(passwordPlane, hashPassword) =>{
    return await bcrypt.compare(passwordPlane, hashPassword)

}

module.exports={encrypt, compare}
