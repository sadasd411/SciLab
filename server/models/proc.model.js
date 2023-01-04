
const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ProcSchema = new mongoose.Schema(
    
    {
        expNum: {
            type: String,
        },
        procName:{
            type: String,
            },
        
        procDesc: {
            type: String,
        },
    },{timestamps:true}
);

module.exports = mongoose.model("Proc", ProcSchema);