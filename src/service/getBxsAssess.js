'use strict';
import qwest from 'qwest';
import API from './index.js';

export default function funcGetBxsAssess() {
    qwest.get(API.ASSESS)
        .then(function(xhr, response) {
            const resp = JSON.parse(response);
            console.log('success', resp);
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}