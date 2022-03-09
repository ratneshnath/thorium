const jwt =  require("jsonwebtoken")
const mid1 = function(req,res,next){
    let token = req.headers["x-auth-token"]
    if(!token)
    token = req.headers["x-auth-token"]
    if(!token)
    return res.send({status: false,msg: "token must be present"});
    
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;

    if (decodedToken.userId != userId) {
        res.send({ error: " Login user is not authorized" })
    }
    next()

}
module.exports.mid1=mid1