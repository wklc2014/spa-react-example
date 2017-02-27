'use strict';

import React, {Component} from 'react';

class Login extends Component {
    render() {
        const {username} = this.props;
        if (username) {
            return (
                <div className="loginWraper">
                    <span className="item">{username}</span>
                    <span
                        className="item pointer"
                        onClick={e => this.props.ActionLogout()}
                    >
                        退出
                    </span>
                </div>
            );
        }
        return (
            <div className="loginWraper">
                <span
                    className="item pointer"
                    onClick={e => this.props.ActionLogin()}
                >
                    登录
                </span>
            </div>
        );
    }
}

export default Login;
