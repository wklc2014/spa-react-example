'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import lodash from 'lodash';

import NavLink from './common/NavLink.jsx';
import Login from './view/Login.jsx';

import {NAV_DATA} from './common/const.js';

class App extends Component {
    render() {
        const {counter, routing} = this.props;
        const navEle = Object.keys(NAV_DATA).map(v => {
            const curr = NAV_DATA[v];
            const to = curr.to + (curr.params ? `/${lodash.uniqueId()}` : '');
            const isHome = !!curr.to;
            const props = {to, isHome};
            return (
                <li key={v}>
                    <NavLink {...props}>{curr.text}</NavLink>
                </li>
            );
        });

        const loginProps = {
            username: this.props.user.username,
            login: this.props.login
        }
        return (
            <section>
                <div className="appHeader">
                    <h3 className="title">
                        this is top header
                        <span className="colorRed">
                            {counter}
                        </span>
                        <Login {...loginProps} />
                    </h3>
                    <nav className="nav">
                        <ul>
                            {navEle}
                        </ul>
                    </nav>
                </div>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default App;
