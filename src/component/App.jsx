'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';

import NavLink from './common/NavLink.jsx';

class App extends Component {
    render() {
        const {counter} = this.props;
        return (
            <section>
                <div className="appHeader">
                    <h3 className="title">
                        this is top header
                        <span className="colorRed">
                            {counter}
                        </span>
                    </h3>
                    <nav className="nav">
                        <ul>
                            <li>
                                <NavLink to="/" isHome>
                                    首页
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/counter">
                                    计数器
                                </NavLink>
                            </li>
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
