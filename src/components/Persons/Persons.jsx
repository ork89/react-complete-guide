// import React, { PureComponent } from 'react'; // Can be used when by default you want
// to check if any of the properties changed because it's a regular compinent that already has the "shouldComponentUpdate"
// function for every property of the component.

import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.jsx] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.jsx] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.jsx] getSnapshotBeforeUpdate');
        return {message: 'This is a snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.jsx] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.jsx] componentWillUnmount');
    }

    render() {
        console.log('[Persons.jsx] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons;
