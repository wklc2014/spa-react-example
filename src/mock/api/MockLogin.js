'use strict';

function login(request) {
    console.log(request)
    return [200, {}, request.queryParams];
};

export default login;
