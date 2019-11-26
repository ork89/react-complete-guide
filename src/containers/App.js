/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Constructor');
    }

    state = {
        persons: [
            { id: 1, name: 'Ori K.', age: 30 },
            { id: 2, name: 'John Doe', age: 31 },
            { id: 3, name: 'Jane Doe', age: 28 }
        ],
        otherState: 'Some other value',
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount(){    //Will be depricated in the near future...
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shoulComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    deletePersonHandler = personIndex => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    togglepersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        console.log('[App.js] Render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <button
                    onClick={() => {
                        this.setState({ showCockpit: false });
                    }}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglepersonsHandler}
                    />
                ) : null}
                {persons}
            </div>
        );
    }
}

export default App;
