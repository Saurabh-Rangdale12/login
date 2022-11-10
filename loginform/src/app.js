const express= require("express");
const app= express();
const path= require("path");
require("./db/conn.js");
const port = process.env.PORT || 9000;

const staticpath= path.join(__dirname, "../public");
app.use(express.static(staticpath));

app.get("/",(req, res)=>{
    res.send("Hello from the other side");
})
app.get("/about",(req, res)=>{
    res.send("Hello from the about page");
})
app.listen(port, ()=>{
    console.log(`Connected at port ${port}`);
})


 


// db.WebDev.insertOne({name:"Java Script", type:"Full Stack", video:110, active:true})