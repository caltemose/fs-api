module.exports = function (app, passport) {

    app.all('*', function (req, res, next) {
        res.locals.isAuthenticated = false;
        // if (req.isAuthenticated()) {
        //     res.locals.isAuthenticated = true;
        //     res.locals.user = req.user;
        // }
        next();
    });

    app.get('/', function (req, res) {
        res.render('index');
    });

}
