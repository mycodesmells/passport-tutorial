var express = require('express');
var app = module.exports = express();

require('./server/express-configuration')(app);

var auth = require('./server/auth');
auth.initialize(app);
app.use(auth.router);
app.use('/admin*', auth.isAuth);

var content = require('./server/content');
app.use(content);

app.listen(9000);