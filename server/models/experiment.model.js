const mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const ExperimentSchema = new mongoose.Schema(
    
    {
        experimentName: {
            type: String,
            required:[true, "An experiment name is required"],
        },

        startDate: {
            type: Date,
            required:[true, "A start date is required"],
        },

        expirationNumber: { 
            type: String,
            required:[true, "An expiration number is required"],
        },

        aimObjective: { 
            type: String,
            required:[true, "An aim/objective is required"],
        },

        introduction: { 
            type: String,
            required:[true, "An introduction is required"],
        },

        createdBy: { 
            type: String,
            required:[true, "A created by is required"],
        },

        instrumentsRequired: { 
            type: String,
            required:[true, "A required instrument is required"],
            enum: [
                "Ammeter",
                "Multimeter",
                "Oscilloscope",
                "Voltmeter",
                "Digital scale",
                "Verinier caliper",
            ]
        },

        status: { 
            type: String,
            required:[true, "A status is required"],
            enum: [
                "not started",
                "in progress",
                "completed",
            ]
        },

        procedure: { 
            type: String,
            required:[true, "A status is required"],
            enum: [
                "Proc A",
                "Proc B",
                "Proc C",
            ]
        },

        result: {
            type: String,
            required:[true, "A result is required"],
        }

    }, { timestamps: true });

const modelName = "Experiment";
//ExperimentSchema.plugin(uniqueValidator);
const  Experiment = mongoose.model(modelName, ExperimentSchema);
module.exports= Experiment;
