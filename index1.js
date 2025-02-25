const express= require('express');
const app=express();
const port=4000;
const path=require("path");
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

app.set("view engine","ejs");

app.set("views", path.join(__dirname,"/views"));


app.get("/",(req,res) =>{
    res.render("home.ejs");
});


app.get("/rolldice", (req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});