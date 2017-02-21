'use strict';

var login = require('./login.js');

var config = {
    login: {
        status: true,
        api: '/assess/login',
        content: login
    }
}

module.exports = config;
