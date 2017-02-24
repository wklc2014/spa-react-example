'use strict';
import keyMirror from 'keymirror';

const actionType = keyMirror({
    COUNTER_INCREMENT: null,
    COUNTER_DECREMENT: null,
    COUNTER_ADD: null,

    LOGIN: null
});

export default actionType;
