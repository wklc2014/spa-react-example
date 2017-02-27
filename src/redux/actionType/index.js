'use strict';
import keyMirror from 'keymirror';

const ActionType = keyMirror({
    COUNTER_INCREMENT: null,
    COUNTER_DECREMENT: null,
    COUNTER_ADD: null,

    LOGIN: null,
    LOGOUT: null,
});

export default ActionType;
