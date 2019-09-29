'use strict';
const user = require('./app/routes/user');
const message = require('./app/routes/message')

 function registerEndpoints(app){
    app.use('/user',user);
    app.use('/message',message);
}


module.exports = registerEndpoints;
