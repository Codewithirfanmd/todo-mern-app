const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: Date
    
}, {Timestamp: true})

module.exports = mongoose.model("Todo", todoSchema)
