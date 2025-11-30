const mongoose = require("mongoose")
const {Schema} = mongoose

const milkSchema = new Schema({
    kg:{
        type:Number,
        require: true
    },
    rate:{
        type: Number,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    time:{
        type: Date,
         default: () => new Date().toISOString().split("T")[0]
    }
    
   
    
})

module.exports = mongoose.model("milkData",milkSchema)