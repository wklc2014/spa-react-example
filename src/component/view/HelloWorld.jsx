'use strict';
import React, {Component} from 'react';
import login from '../../service/login.js';
import getBxsAssess from '../../service/getBxsAssess.js';

class HelloWorld extends Component {
    handleClick() {
        login();
        console.log(1233, 'aaaa')
    }
    handleUpdate() {
        getBxsAssess();
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
