const mongoose = require("mongoose")
const {Schema} = mongoose

const mudhiBazarSchema = new Schema({
    name:{
        type:String,
        require: true
    },
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

module.exports = mongoose.model("mudhiBazarData",mudhiBazarSchema)