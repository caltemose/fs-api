var auth = require('../../helpers/auth');
var User = require('../../models/user');

module.exports = function (app, passport) {

    app.get('/admin/users', function (req, res) {
        User.find().sort({"role": -1}).exec(function (err, users) {
            var data = {};
            if (err) data.err = err;
            if (users) data.users = users;
            res.render('admin/users', data);
        });
    });

}
