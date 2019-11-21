/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import classes from './App.module.css';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Ori K.', age: 30 },
            { id: 2, name: 'John Doe', age: 31 },
            { id: 3, name: 'Jane Doe', age: 28 }
        ],
        otherState: 'Some other value',
        showPersons: false
    };

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
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                {' '}
                                <Person
                                    click={() =>
                                        this.deletePersonHandler(index)
                                    }
                                    name={person.name}
                                    age={person.age}
                                    changed={event =>
                                        this.nameChangedHandler(
                                            event,
                                            person.id
                                        )
                                    }
                                />{' '}
                            </ErrorBoundary>
                        );
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Almost Empty React App</h1>
                <p className={assignedClasses.join(' ')}>
                    This is a secondary Headline
                </p>
                <button
                    className={btnClass}
                    onClick={this.togglepersonsHandler}>
                    Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;