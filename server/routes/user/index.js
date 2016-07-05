var auth = require('../../helpers/auth');

module.exports = function (app, passport) {

    app.get('/profile', auth.requireAuthenticated, function (req, res) {
        res.render('user/profile');
    });

}
