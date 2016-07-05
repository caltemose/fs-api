module.exports = {
    requireAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/');
    },

    requireUser: function (req, res, next) {
        if (req.isAuthenticated() && req.user.role !== 'limbo')
            return next();
        
        res.redirect('/');
    },

    requireAdmin: function (req, res, next) {
        if (req.isAuthenticated() && req.user.role === 'admin')
            return next();
        res.redirect('/');
    }
}
