'use strict';
import React, {Component} from 'react';
import funcLogin from '../../service/login.js';

class HelloWorld extends Component {
    handleClick() {
        funcLogin();
        console.log(1233, 'aaaa')
    }
    render() {
        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is HelloWorld component.
                </h2>
                <div className="box">
                    <button
                        onClick={this.handleClick.bind(this)}
                    >
                        登陆
                    </button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;
