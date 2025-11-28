const mongoose = require("mongoose")
const {Schema} = mongoose

const obodhanSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    gift: {
        type: String,
        require: true
    },
    time:{
        type: Date,
         default: () => new Date().toISOString().split("T")[0]
    }
    
   
    
})

module.exports = mongoose.model("obodhanData",obodhanSchema)