import React from 'react';
import Summary from './Summary.js';
import Total from './Total.js';

export default function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary format={props.format} selected={props.selected} />
            <Total format={props.format} selected={props.selected} />
        </section>
    );
};