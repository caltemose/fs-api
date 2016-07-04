var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// var createdDate = require('../utils/createdDate');

var userSchema = mongoose.Schema({
    email: String,
    username: String,
    created: {
        type: Date,
        default: Date.now
    },
    // role/permissions
    role: {
        type: String,
        enum: ["limbo", "user", "admin"],
        default: "limbo"
    },
    // local auth strategy
    local: {
        email: String,
        password: String
    },
    // google auth strategy
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);
