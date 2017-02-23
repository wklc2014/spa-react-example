'use strict';
import qwest from 'qwest';
import __API__ from './index.js';

export default function funcGetBxsAssess() {
    qwest.get(__API__.assess)
        .then(function(xhr, response) {
            console.log('success', response)
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}