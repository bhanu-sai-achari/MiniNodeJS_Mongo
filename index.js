const mongoose=require("mongoose");
const express = require("express");
const app = express();

const DATABASE ="mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
.then(()=>{
    console.log("DB Connected!!!!!!!!")
})
.catch(()=>{
    console.log("DB not Connected!!!!!!!!")

})

app.get("/",(req,res)=>{
    res.send("<h1>Visiting Root!!!!!!!</h1>");
})

app.listen(8000,() => {

    console.log("APP is running at 8000");
} )