const express = require("express");
const app = express();

const port = 8080;

app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/instagram/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data){
        res.render("insta.ejs",{data});
    } else {
        res.render("error.ejs");
    }
    
})
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})

