
const User = require('../models/user.model');
const bcrypt = require('bcrypt');    // need this for login below
const jwt = require('jsonwebtoken');  //  

// here we do it a little differently than in the restaurant.controller.js
module.exports = {
    // Register user
    register: (req, res) => {
        
        console.log("in register");
        console.log(req.body);

        // use the req data and the User model constructor to create a user object
        const user = new User(req.body);
        console.log("user: ", user);

        user.save()   // user is an instance of a class, so when it uses a method, it knows it will work
        // on that particular instance of the class, so does not need any parameters in the parantheses
        // data is already in that instance of the object
            .then((newUser) => {
                console.log("newUser: ", newUser);
                console.log("Successfully registered");
                res.json({
                    message: "Successfully registered",
                    user: newUser
                })
            })
            .catch((err) => {
                console.log("registration not successfull");
                res.status(400).json(err);
            });
    },
    
    // login user
    login: (req, res) => {
        console.log(User);
        console.log(req.body);
        // we need to find a typical user
        User.findOne({ email: req.body.email })
            .then((userRecord) => {
                // check if this returned object is null
                if (userRecord === null) {
                    // email not found in the collection/db
                    res.status(400).json({ message: "Invalid login attempt" });
                } else {
                    // the email address was found
                    // now compare the address given to us in the request with the one stored in the db
                    // if the password in the req is hashed same way as password in db, and if the two 
                    // match then they must be the same when starting out, so we are good to go.
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if (isPasswordValid) {
                                console.log("password is valid");
                                console.log(userRecord);
                                console.log(process.env.JWT_SECRET)   // don't send this back, cause this is secret, just use for testing
                                // create a cookie, 'usertoken' is the name of the cookie
                                // we can have in a single response multiple cookies. like key-value pairs
                                // we need jwt library for this, so import it at the beginning of this page
                                res.cookie("usertoken",
                                    jwt.sign({     // this method (sign) will allow me to go in and decide what do I want
                                        // payload is the data I want to save
                                        user_id: userRecord._id,
                                        email: userRecord.email
                                    },
                                    process.env.JWT_SECRET),  // used to sign / hash the date in the cookie.  this is the secret key 
                                    {
                                        // configuration settings for this cookie
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 900000)   // when the cookie expires
                                    }
                                    )
                                .json({ 
                                    message: "Successfully logged in", 
                                    userLoggedIn: userRecord.username,
                                    userEmail: userRecord.email
                                        })
                            } else {
                                // passwords did not match
                                // here use the below msg that does not specify that it was the password
                                // that was invalid, so hackers do not get what is missing
                                res.status(400).json({ message: "Invalid login Attempt" });
                            }
                        })
                        .catch((err) => {
                            console.log("error with compare pws");
                            res.status(400).json({ message: "Invalid login attempt" });
                        });
                }
            })
            .catch((err) => {
                console.log("error with FindOne");
                console.log(err)
                res.status(400).json({ message: "Invalid login attempt" });
            });
    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");  // same name as above for saving cookie
        res.json({
            message: "You have successfully logged out",
        })
    },


    // get _id for this user
    getLoggedInUser: (req, res) => {
        console.log("in getloggedInuser");
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        // the decoded values are held in a "payload object"
        //    we save the _id as a part of login so we can use it for 
        //    many things.
        User.findById(decodedJWT.payload._id)
            .then(user => req.json(user))
            .catch(err => res.json(err));
    },
}