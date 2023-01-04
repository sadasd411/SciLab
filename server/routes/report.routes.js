
const ReportController = require('../controllers/report.controller');

module.exports = (app) => {
    app.get("/api/reports/allReports", ReportController.getAll);
    app.post("/api/reports/new", ReportController.create);
    app.get("/api/reports/:id", ReportController.getOne); 
    app.put("/api/reports/:id", ReportController.update);
    app.delete("/api/reports/:id", ReportController.delete);
}