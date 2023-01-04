
// require("mongoose");

// const Experiment = require('../models/experiment.model');
const Report = require('../models/report.model');

// route:  get all experiments
module.exports.getAll = (req, res) => {
    console.log("inside getall");

    // route: get all experiments
    Report.find()
        .then((allReports) => {
        console.log("all Procs: ", allReports);
        res.json(allReports);
        })
        .catch((err) => {
        console.log("err: ", err);
        res.json(err);
        });
};

// route:  create one experiment
module.exports.create = (req, res) => {
    console.log("inside create");
    console.log("req.body: ", req.body);

    Report.create(req.body) 
        .then ((newReport) => {
        console.log("newReport: ", newReport);
        res.json(newReport);
        })
        .catch((err) => {
        console.log("err: ", err);
        res.status(400).json(err);
        });
};

// route: display one experiment

module.exports.getOne = (req, res) => {
    console.log("inside getOne");
    console.log("looking for id: ", req.params.id);

    Report.findById (req.params.id)
        .then((oneReport) => {
        console.log("One Proc: ", oneReport);
        res.json(oneReport);
        })
        .catch((err) => {
        console.log("err: ", err);
        res.status(400).json(err);
        });
};

// route: Edit one experiment

module.exports.update = (req, res) => {
    console.log("inside edit/update");
    console.log("req.body: ", req.body);

    Report.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedReport) => {
        console.log("updatedProc: ", updatedReport);
        res.json(updatedReport);
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json(err);
        });
};

// route:  delete one experiment
module.exports.delete = (req, res) => {
    console.log("inside delete");
    console.log("looking for id: ", req.params.id);

    Report.findByIdAndDelete(req.params.id)
        .then((deletedProc) => {
        console.log("deletedReport: ", deletedReport);
        res.json(deletedReport);
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json(err);
        });
}