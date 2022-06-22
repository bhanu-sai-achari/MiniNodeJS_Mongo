const mongoose=require("mongoose");

const DATABASE ="mongodb://localhost:27017/testup";

mongoose.connect(DATABASE)
.then(()=>{
    console.log("DB Connected!!!!!!!!")
})
.catch(()=>{
    console.log("DB not Connected!!!!!!!!")

})
