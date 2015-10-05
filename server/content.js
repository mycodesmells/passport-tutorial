var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/admin', function(req, res) {
    res.render('admin', {username: req.user.username});
});

module.exports = router;