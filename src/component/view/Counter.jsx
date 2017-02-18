'use strict';
import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

    }
    handleClick(operate) {
        this.props[operate]();
    }
    render() {
        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is Counter component
                </h2>
                <div className="mb16">
                    <button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'increment')}
                    >
                        +
                    </button>
                    <button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'decrement')}
                    >
                        -
                    </button>
                    <button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'incrementIfOdd')}
                    >
                        Increment if odd
                    </button>
                    <button
                        onClick={this.handleClick.bind(this, 'incrementAsync')}
                    >
                        Increment async
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;