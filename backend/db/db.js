const mongoose = require('mongoose')


function connecttodb(){
    mongoose.connect(process.env.DB_CONNECT)
.then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log("connectionn failed",err)
})}

module.exports = connecttodb