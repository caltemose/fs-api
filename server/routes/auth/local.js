module.exports = function (app, passport) {
    app.get('/connect/local', function (req, res) {
        res.render('connect-local', {message: req.flash('loginMessage')});
    });

    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/user/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));
}
