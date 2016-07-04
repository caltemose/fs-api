var auth = require('../../helpers/auth');

module.exports = function (app, passport) {

    app.get('/profile', auth.requireUser, function (res, req) {
        res.render('profile');
    });

}
