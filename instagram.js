const express= require('express');
const app=express();
const port=4000;
const path=require("path");
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

app.set("view engine","ejs");

app.set("views", path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    res.render("instagram.ejs",{data});
});