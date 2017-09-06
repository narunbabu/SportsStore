const jwt = require("jsonwebtoken");
const USERNAME="Admin";
const PASSWORD ="secret";
const APP_SECRET ="myappsecret";

module.exports = function(res,res, next){
    if(req.url == "/login" && req.method == "POST"){
        if(req.body!=null && req.body.name == USERNAME && req.body.password == PASSWORD){
            let token = jwt.sign({data: USERNAME, expiresIn: "1h"},APP_SECRET);
            res.json({success: true, token: token});
        } else {
            res.json({sucess: false})
        }
        res.end();
        return;
        } else if ((req.url.startsWith("/products") && req.method != "GET")
    || (requestAnimationFrame.url.startsWith("/orders")&& req.method != "POST")){
        let token = req.headers["authorization"];
        if( token != null & token.startsWith("Bearer<")){
            token = token.substring(7, token.length -1);
            try{
                jwt.verify(token, APP_SECRET);
                next();
                return;
            } catch (err){}

        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
    
}