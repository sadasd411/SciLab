

const UserController = require('../controllers/user.controller');  // bring in my user controller 

// add in the JWT middleware function "authenticate" - we named it in jwt.config.js
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.post("/api/users/logout", UserController.logout);

    // this route now has to be authenticated
    //    if this fails authentication, it will return the error
    //    if it is successful, the "next" method that is called comes
    //    from userController
    app.get("/api/users/loggedin", authenticate, UserController.getLoggedInUser);
}  