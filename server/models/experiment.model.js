const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ExperimentSchema = new mongoose.Schema(
    
    {
        experimentName:{
            type: String,
            required:[true, "You must enter a name for experiment"],
            },
        
        startDate: {
            type: String,
            required: [true, "You must enter the start date"],
        },

        experimentNumber: {
            type: String,
            required: [true, "You must enter an experiment number"],
        },

        objective: {
            type: String,
            required: [true, "You must enter an objective"],
        },

        responsibleUser: {
            type: String,
            required: [true, "You must enter the responsible person"]
        },

        instrumentsRequired: {
            type: String,
            required: [true, "You must select atleast 1 instrument"],
            enum: [
                "Ammeter",
                "Digital Scale",
                "Multimeter",
                "Oscilloscope",
                "Vernier Caliper",
                "Voltmeter",
            ]
        },

        status: {
            type: String,
            required: [true, "You must select a status"],
            enum: [
                "New Request",
                "In Queue",
                "In Process",
                "Completed"
            ]
        },

        procedure: {
            type: String,
            required: [true, "You must select a procedure"],
            enum: [
                "Proc A",
                "Proc B",
                "Proc C"
            ]
        },

        results: {
            type: String,
        },
    },{timestamps:true}
);

module.exports = mongoose.model("Experiment", ExperimentSchema);
