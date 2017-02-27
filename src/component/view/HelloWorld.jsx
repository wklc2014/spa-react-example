'use strict';
import React, {Component} from 'react';
// import ServiceLogin from '../../service/ServiceLogin.js';
import ServiceGetBxsAssess from '../../service/ServiceGetBxsAssess.js';

class HelloWorld extends Component {
    handleClick() {
        // ServiceLogin();
        // console.log(1233, 'aaaa')
    }
    handleUpdate(data) {
        ServiceGetBxsAssess(data);
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
                        className="btn btn-primary mr16"
                        onClick={this.handleClick.bind(this)}
                    >
                        登陆
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={e => this.handleUpdate('abc')}
                    >
                        更新
                    </button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;
