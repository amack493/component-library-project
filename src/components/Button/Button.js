import React from 'react';
import './Button.css'
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default', 'cart']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.border) {
        classList += ` button-border`
    }
    if (props.light) {
        classList += ` button-light`
    }
    
   return <button class={classList}>
       <img src= {props.icon}/>
        {props.label}
    </button>
}

export default Button;