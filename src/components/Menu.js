import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {

    render() {
        let visibility = 'hide';
        if(this.props.menuOpen) {
            visibility = 'show';
        }
        return (
            <div id="flyoutMenu"
                 onClick={this.props.onClick}
                 className={visibility}>
                <h2><a href="#">Home</a></h2>
                <h2><a href="#">About</a></h2>
                <h2><a href="#">Contact</a></h2>
                <h2><a href="#">Search</a></h2>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;
