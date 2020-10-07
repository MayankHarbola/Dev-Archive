const mongoose = require("mongoose");
const env = require("../utils/env");
//Loda Harbola
mongoose.connect(env.mongo);
mongoose.connection.on('open',()=>{
    console.log('ConnectionOpen');
})

module.exports = mongoose;
