"use strict";
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class NavLink extends Component {
    render() {
        const {isHome} = this.props;
        const otherProps = {...this.props};
        delete otherProps.isHome;
        if (isHome) {
            return (
                <IndexLink
                    {...otherProps}
                    activeClassName="navActive"
                />
            );
        }
        return (
            <Link
                {...otherProps}
                activeClassName="navActive"
            />
        )
    }
}

export default NavLink;
