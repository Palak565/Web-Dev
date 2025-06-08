const express = require("express");
const app = express();

console.dir(app);

let port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening to port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("root path");
})
// app.use((req,res)=>{
//     console.log("Request received");
// })