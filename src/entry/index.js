'use strict';
import React from 'react';
import ReactDOM, {render} from 'react-dom';

import '../style/index.scss';

import App from '../component/App.jsx';

const oApp = document.getElementById('app');

render(<App />, oApp);
