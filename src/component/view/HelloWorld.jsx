'use strict';
import React, {Component} from 'react';
import funcLogin from '../../service/login.js';
import funcGetBxsAssess from '../../service/getBxsAssess.js';

class HelloWorld extends Component {
    handleClick() {
        funcLogin();
        console.log(1233, 'aaaa')
    }
    handleUpdate() {
        funcGetBxsAssess();
        console.log(1233, 'bbbb')
    }
    render() {
        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is HelloWorld component.
                </h2>
                <div className="box">
                    <button
                        className="mr16"
                        onClick={this.handleClick.bind(this)}
                    >
                        登陆
                    </button>
                    <button
                        onClick={this.handleUpdate.bind(this)}
                    >
                        更新
                    </button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;
