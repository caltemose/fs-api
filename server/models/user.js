var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var createdDate = require('../utils/createdDate');

var userSchema = mongoose.Schema({
    meta: {
        email: String,
        name: String,
        created: Date.now
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
