var User = require('../models/user');

module.exports = function (app, passport) {

    app.all('*', function (req, res, next) {
        res.locals.isAuthenticated = false;
        if (req.isAuthenticated()) {
            res.locals.isAuthenticated = true;
            res.locals.user = {
                email: req.user.email,
                username: req.user.username,
                role: req.user.role
            }
        }
        next();
    });

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/test', function (req, res) {
        var q = req.param('q');
        User.find(
            {
                $or: [
                    {'email':q},
                    {'local.email':q}
                ]
            },
            function (err, docs) {
                if (err) res.send(err);
                if (docs) res.send(docs);
                return;
            }
        );
    });

    // authentication routes
    require('./auth')(app, passport);

    // admin routes
    require('./admin')(app, passport);

    // user routes
    require('./user')(app, passport);

}
