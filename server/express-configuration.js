var express = require('express'),
    bodyParser = require('body-parser'),
    //multipart = require('connect-multiparty'),
    //cookieParser = require('cookie-parser'),
    session = require('express-session'),
    flash = require('express-flash');

module.exports = function (app) {
    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //app.use(multipart());
    //app.use(cookieParser());
    app.use(session({
        secret: 'WORDEE_SESSION',
        resave: true,
        saveUninitialized: true
    }));
    app.use(flash());

};