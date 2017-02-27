'use strict';
import qwest from 'qwest';
import API from './API.js';

export default function ServiceLogin(data, cb) {
    qwest
        .get(API.LOGIN)
        .then(function(xhr, response) {
            const resp = JSON.parse(response);
            cb('ok', resp);
        })
        .catch(function(e, xhr, response) {
            console.log('ServiceLogin is error');
        });
}