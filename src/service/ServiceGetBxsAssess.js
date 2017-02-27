'use strict';
import qwest from 'qwest';
import API from './API.js';

export default function ServiceGetBxsAssess(data) {
    qwest.post(API.ASSESS, data)
        .then(function(xhr, response) {
            const resp = JSON.parse(response);
            console.log('success', resp);
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}