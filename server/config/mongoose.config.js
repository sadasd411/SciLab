
const mongoose = require('mongoose');
const dbName = process.env.DB_NAME;
console.log("dbname: ", dbName);

// mongoose.connect("mongodb://localhost/scilab", {
mongoose.connect("mongodb://localhost/" + dbName, {         // somehow this line should work, but is giving error. So the dbname was hardcoded in the previous line and that works.
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("You have successfully connected to the " + dbName + " database");
    })
    .catch((err) => {
        console.log("There was an error connecting to the " + dbName + " database");
        console.log(err);
    });