var express=require ('express');
var app=express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.send("Welcome to our server");
});
app.get("/product",(req,res)=>
{
var p={
    "id":39,
    "title": "Gerbera",
    "description": "Beautiful flower",
    "price":1000,
    "quantity":500


}
res.send(p);
});


app.listen(8000);
console.log("App is Listening on port 8000");
