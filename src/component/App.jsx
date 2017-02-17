'use strict';
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 100
        }
    }
    render() {
        const {width, height} = this.state;
        return (
            <div>
                this is App component 123
            </div>
        )
    }
}

export default App;
