'use strict';
import qwest from 'qwest';
import API from './index.js';

export default function login(cb) {
    qwest.get(API.LOGIN)
        .then(function(xhr, response) {
            const resp = JSON.parse(response);
            console.log(typeof resp);
            console.log('success', resp);
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}