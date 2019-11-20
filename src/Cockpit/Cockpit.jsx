/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components';

const Cockpit = (props) => {
    
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

    // style.backgroundColor = 'Red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // };
        

        let classes = [];
        if (props.persons.length <= 2) {
            // classes = ['red']
            classes.push('red');
        }

        if (props.persons.length <= 1) {
            // classes = ['red', 'bold']
            classes.push('bold');
        }
    
    return (
        <div>
             <h1>Almost Empty React App</h1>
                <p className={classes.join(' ')}>
                    This is a secondary Headline
                </p>
                <StyledButton
                    altStyle={props.showPersons}
                    onClick={this.togglepersonsHandler}>
                    Toggle persons
                </StyledButton>
        </div>
    )
}

export default Cockpit;