
const mongoose = require('mongoose');
require("dotenv").config();


const db=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("Connect To The Database ||");
    
}
module.exports = db
