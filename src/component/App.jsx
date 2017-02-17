'use strict';
import React, {Component} from 'react';

import picJPG from '../img/pic.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 100,
            height: 100
        }
    }
    handleClick(type) {
        let {width, height} = this.state;
        if (type === '+') {
            width += 10;
            height += 10;
        } else if (type === '-') {
            width -= 10;
            height -= 10;
        }
        this.setState({
            width,
            height
        })
    }
    render() {
        const {width, height} = this.state;
        return (
            <div className="appWraper">
                <h2 className="mb16">this is App component</h2>
                <div className="mb16">
                    <button
                        className="mr16"
                        onClick={this.handleClick.bind(this, '+')}
                    >
                        +
                    </button>
                    <button
                        onClick={this.handleClick.bind(this, '-')}
                    >
                        -
                    </button>
                </div>
                <div className="box">
                    <img
                        src={picJPG}
                        width={width}
                        height={height}
                        alt="123"
                    />
                </div>
                <div className="box">
                    <div className="thunder"></div>
                </div>
            </div>
        )
    }
}

export default App;
