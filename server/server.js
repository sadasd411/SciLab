const express = require('express');
const app = express();
const cors = require('cors');
const experimentRoute = require('./routes/experiment.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}))

require('./config/mongoose.config');

require('./routes/experiment.route')(app);
experimentRoute(app);

app.listen(8000, () => {
    console.log("Your port is running: " + 8000);
})