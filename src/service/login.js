'use strict';
import qwest from 'qwest';

export default function funcLogin() {
    qwest.get('/assess/login', {
            firstname: 'Pedro',
            lastname: 'Sanchez',
            age: 30
        })
        .then(function(xhr, response) {
            console.log('success', response)
        })
        .catch(function(e, xhr, response) {
            console.log('error', e);
        });
}