const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.get("/register", (req, res) => {
    let {username, password} = req.query;
    res.send(`Standard GET response. Welcome, ${username}`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    let {username} = req.body;
    res.send(`Standard POST response. Welcome, ${username}`);
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});