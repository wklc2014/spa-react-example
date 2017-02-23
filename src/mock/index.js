'use strict';
import MockJS from 'mockjs';
import __API__ from '../service';
import login from './api/login.js';
import getBxsAssess from './api/getBxsAssess.js';


MockJS.mock(__API__.login, login);
MockJS.mock(__API__.assess, getBxsAssess);

