/* eslint-disable no-unused-vars */
import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';

//import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
    //To be used (via Radium) in the root component with 'StyleRoot' for media queries
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        //<div className='Person' style={style}>
        <StyledDiv>
            <p onClick={props.click}>Hi! my name is {props.name}. I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </StyledDiv>
        //</div>
    );
};

//export default Radium(person);
export default person;
