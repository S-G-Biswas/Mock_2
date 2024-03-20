const jwt = require( 'jsonwebtoken' );
const { model } = require('mongoose');

const auth = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,"masai")
        if(decoded){
            next()
        }
        else{
            res.send({"msg":"you are not authorised"})
        }
    }
    else{
        res.send({"msg":"you are not authorised"})
    }
}

module.exports={
    auth
}