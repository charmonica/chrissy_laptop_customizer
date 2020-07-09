import React from 'react';
import Feature from './Feature.js'

export default function Form(props) {
    return (
    <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature format={props.format} selected={props.selected} updateFeature={props.updateFeature} />
    </form>
    );
};






