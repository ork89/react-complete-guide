/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.jsx] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    Hi! my name is {this.props.name}. I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    }
}

export default Person;
