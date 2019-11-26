import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.jsx] useEffect');

        const timer = setTimeout(() => {
            alert('Data Saved');
        }, 1000);
        return () => {
            clearTimeout(timer);    //Example of a cleanup using useEffect.
            console.log('[Cockpit.jsx] cleanup using useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.jsx] 2nd useEffect');
        return () => {
            console.log('[Cockpit.jsx] cleanup using 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>
                This is a secondary Headline
            </p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle persons
            </button>
        </div>
    );
};

export default Cockpit;
