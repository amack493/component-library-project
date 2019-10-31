import React from 'react';
import './Form.css';

const Form = (props) => {
    let classList = ''
    let types = ['email']

    return <form class={classList}>
    {props.label}
    </form>
}


export default Form;