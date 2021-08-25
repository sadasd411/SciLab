

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [ true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be atleast 8 characters"],
    },
    // confirm password is not included here, so it will not be included in the db collection.
    //     we only need one copy of the password if they match.
}, { timestamps: true });

// Virtual field
//   store information from our request, but it will NOT be saved to the collection / db
UserSchema.virtual("confirmPassword")   // here I am creating a field called 'confirmPassword'
// it creates a virtual type for this model with a given name
    .get(() => this._confirmPassword)   // method chaining, using a 'getter' here.  underscore coz when we 
    // create a virtual field, the field created by system starts with an underscore.
    .set((value) => this._confirmPassword = value);  // this is allowing us to set and get a confirmed password

// using middle ware to validate passwords
// if passwords do not match, then invalidate message, otherwise go to the next step in the process
UserSchema.pre("validate", function(next) {
    console.log("Inside pre-validate")
    // this will happen pre the validation step
    if(this.password !== this.confirmPassword) {  // I am using the virtual field created above
        this.invalidate("confirmPassword", "Passwords must match");  // if it is not valid, i want to invalidate it
    }
    // run the next step in the process
    next();
});

UserSchema.pre("save", function(next){
    console.log("inside pre-save");

    bcrypt.hash(this.password, 10)     // can also use confirmPassword
        .then((hashedPassword) => {
            //update the password in this instance to use the hashed returned version
            this.password = hashedPassword;
            next();
        })
        .catch((err) => {
            console.log("Error while hashing the password")
        });
});


// User will become the name of our collection
//    mongoose will make it lower case and plural
//    collection name: users
const User = mongoose.model("User", UserSchema);

module.exports = User;
