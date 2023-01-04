

const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ReportSchema = new mongoose.Schema(
    
    {
        expNum: {
            type: String,
        },
        reportType:{
            type: String,
            },
        reportDesc: {
            type: String,
        },
    },{timestamps:true}
);

module.exports = mongoose.model("Report", ReportSchema);