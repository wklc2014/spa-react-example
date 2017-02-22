'use strict';
import qwest from 'qwest';

export default function funcGetBxsAssess() {
    qwest.get('/assess/getBxAssess.json')
        .then(function(xhr, response) {
            console.log('success', response)
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}