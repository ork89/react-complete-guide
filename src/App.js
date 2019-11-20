/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './App.css';

const StyledButton = styled.button`
    background-color: ${props => (props.altStyle ? 'red' : 'green')};
    color: white;
    font: inherit;
    border: 1px solid #ccc;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props =>
            props.altStyle ? 'salmon' : 'lightGreen'};
        color: black;
    }
`;

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
                                    //key={person.id}
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

            // style.backgroundColor = 'Red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // };
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            // classes = ['red']
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            // classes = ['red', 'bold']
            classes.push('bold');
        }

        return (
            //<StyleRoot>
            <div className='App'>
                <h1>Almost Empty React App</h1>
                <p className={classes.join(' ')}>
                    This is a secondary Headline
                </p>
                <StyledButton
                    altStyle={this.state.showPersons}
                    onClick={this.togglepersonsHandler}>
                    Toggle persons
                </StyledButton>
                {persons}
            </div>
            //</StyleRoot>
        );
    }
}

//export default Radium(App);
export default App;
