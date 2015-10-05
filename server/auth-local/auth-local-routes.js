var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function (req, res) {
    res.render('login', {error: req.flash('error')});
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true
    })
);

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;