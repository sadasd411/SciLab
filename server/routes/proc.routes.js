
const ProcController = require('../controllers/proc.controller');

module.exports = (app) => {
    app.get("/api/procs/allProcs", ProcController.getAll);
    app.post("/api/procs/new", ProcController.create);
    app.get("/api/procs/:id", ProcController.getOne); 
    app.put("/api/procs/:id", ProcController.update);
    app.delete("/api/procs/:id", ProcController.delete);
}