'use strict';
import Pretender from 'pretender';
import MockJS from 'mockjs';

import API from '../service';
import LOGIN from './api/login.js';
import ASSESS from './api/getBxsAssess.js';

var server = new Pretender(function () {
    this.get(API.LOGIN, LOGIN);
    this.get(API.ASSESS, this.passthrough);
});

server.prepareBody = function(body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
}

// server.shutdown();
