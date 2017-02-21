'use strict';

var login = require('./mock/login.js');

var config = {
    login: {
        status: true,
        api: '/assess/login',
        content: login
    }
}

module.exports = config;
