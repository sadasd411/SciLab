// require("mongoose");

// const Experiment = require('../models/experiment.model');
const Experiment = require('../models/experiment.model');

// route:  get all experiments
module.exports.getAll = (req, res) => {
  console.log("inside getall");

  // route: get all experiments
  Experiment.find()
    .then((allExperiments) => {
      console.log("all Experiments: ", allExperiments);
      res.json(allExperiments);
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

  Experiment.create(req.body) 
    .then ((newExperiment) => {
      console.log("newExperiment: ", newExperiment);
      res.json(newExperiment);
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

  Experiment.findById (req.params.id)
    .then((oneExperiment) => {
      console.log("One Experiment: ", oneExperiment);
      res.json(oneExperiment);
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

  Experiment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedExperiment) => {
      console.log("updatedExperiment: ", updatedExperiment);
      res.json(updatedExperiment);
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

  Experiment.findByIdAndDelete(req.params.id)
    .then((deletedExperiment) => {
      console.log("deletedExperiment: ", deletedExperiment);
      res.json(deletedExperiment);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
}