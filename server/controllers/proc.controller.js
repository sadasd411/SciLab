// require("mongoose");

// const Experiment = require('../models/experiment.model');
const Proc = require('../models/proc.model');

// route:  get all experiments
module.exports.getAll = (req, res) => {
    console.log("inside getall");

    // route: get all experiments
    Proc.find()
        .then((allProcs) => {
        console.log("all Procs: ", allProcs);
        res.json(allProcs);
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

    Proc.create(req.body) 
        .then ((newProc) => {
        console.log("newProc: ", newProc);
        res.json(newProc);
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

    Proc.findById (req.params.id)
        .then((oneProc) => {
        console.log("One Proc: ", oneProc);
        res.json(oneProc);
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

    Proc.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProc) => {
        console.log("updatedProc: ", updatedProc);
        res.json(updatedProc);
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

    Proc.findByIdAndDelete(req.params.id)
        .then((deletedProc) => {
        console.log("deletedProc: ", deletedProc);
        res.json(deletedProc);
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json(err);
        });
}