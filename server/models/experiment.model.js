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

        experimentNumber: { 
            type: String,
            required:[true, "An experiment number is required"],
        },

        objective: { 
            type: String,
            required:[true, "An objective is required"],
        },

        responsibleUser: { 
            type: String,
            required:[true, "An introduction is required"],
        },

        instrumentsRequired: { 
            type: String,
            required:[true, "A required instrument is required"],
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
            required:[true, "A status is required"],
            enum: [
                "New Request",
                "In Queue",
                "In Process",
                "Completed",
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

        results: {
            type: String,
            required:[true, "A result is required"],
        },

        firstName: {
            type: String,
            required:[true, "A first name is required"],
        },

        lastName: {
            type: String,
            required:[true, "A last name is required"],
        },

        selectExperiment: {
            type: String,
            required:[true, "A select experiment is required"],
            enum: [
                "Experiment #1",
                "Experiment #2",
                "Experiment #3",
                "Experiment #4",
                "Experiment #5",
                "Experiment #6",
                "Experiment #7",
                "Experiment #8",
                "Experiment #9",
            ]
        },

        type: {
            type: String,
            required:[true, "A type is required"],
            enum: [
                "PDF",
                "DOC",
                "HTML",
            ]
        },

    }, { timestamps: true });

const modelName = "Experiment";
//ExperimentSchema.plugin(uniqueValidator);
const  Experiment = mongoose.model(modelName, ExperimentSchema);
module.exports= Experiment;
