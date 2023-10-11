const customHeader = (req, res, netx)=>{

    try {
        const apiKey = req.headers.api_key
        if (apiKey==='pablo-01'){
            netx()
        } else{
            res.status(403)
            res.send({error:'API_KEY_NO_ES_CORRECTO'})
        }
    } catch (e) {
        res.status(403)
        res.send({error:'ALGO_OCURRIO_EN_EL_CUSTOME_HEADER'})
    }

}

module.exports = customHeader