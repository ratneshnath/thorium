const mid1 = function(req,res,next){
    let xAuthToken = req.headers["x-auth-token"]
    if(!token)
    token = req.headers["x-auth-token"]
    if(!token)
    return res.send({status: false,msg: "token must be present"});
    next()
}
module.exports.mid1=mid1