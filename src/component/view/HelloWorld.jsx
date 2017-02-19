'use strict';
import React, {Component} from 'react';

class HelloWorld extends Component {
    handleClick() {
        ajaxify.ajax({
            url: '/assess/login',
            method: 'get',
            data: {
                username: 'wangkun',
                password: '123456'
            }
        }).done(function (response, headers, XHR) {
            console.log(response);
            console.log(headers);
            console.log(XHR);
        });
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
