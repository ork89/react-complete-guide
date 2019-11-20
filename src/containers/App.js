/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
//import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Ori', age: 30 },
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
        const style = {
            backgroundColor: 'lightGreen',
            color: 'white',
            font: 'inherit',
            border: '1px solid #ccc',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'green',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );

            return (
                //<StyleRoot>
                <div className='App'>{persons}</div>
                //</StyleRoot>
            );
        }
    }
}
//export default Radium(App);
export default App;
