var exp=require("express")
var cors = require("cors")
var app=exp()
app.listen(1234)
app.use(cors());

app.get("/met1",function(req,res){
    res.send({result:"API1 called"})
})
app.post("/met2",function(req,res){
    res.send({result:"API2 called"})
})
