const ExperimentController = require('../controllers/experiment.controller');

module.exports = (app) => {
    app.get("/api/experiments/allExperiments", ExperimentController.getAll);
    app.post("/api/experiments/new", ExperimentController.create);
    app.get("/api/experiments/:id", ExperimentController.getOne); 
    app.put("/api/experiments/:id", ExperimentController.update);
    app.delete("/api/experiments/:id", ExperimentController.delete);
}