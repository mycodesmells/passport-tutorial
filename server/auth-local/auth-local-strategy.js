var _ = require('lodash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    usersStore = require('./auth-local-users');

passport.use('local', new LocalStrategy(function (username, password, done) {
    var user = _.find(usersStore, {username: username, password: password});

    if (user) {
        done(null, user);
    } else {
        done(null, false, 'Invalid credentials');
    }

}));