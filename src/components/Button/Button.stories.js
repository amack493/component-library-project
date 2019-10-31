import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import cart from './cart_2.png';
import heart from './hearts.png';




storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type="primary"/>)
    .add('Danger', () => <Button label="Danger" type="danger"/>) 
    .add('Success', () => <Button label="Success" type="success"/>)
    .add('Warning', () => <Button label="Warning" type="warning"/>)
    .add('Default', () => <Button label="Default" type="default"/>)

    .add('Primary Border', () => <Button label="Primary Border" type="primary" border/>) 
    .add('Danger Border', () => <Button label="Danger Border" type="danger" border/>)
    .add('Success Border', () => <Button label="Success Border" type="success" border/>) 
    .add('Warning Border', () => <Button label="Warning Border" type="warning" border/>)
    .add('Default Border', () => <Button label="Default Border" type="default" border/>)

    .add('Large Primary', () => <Button label="Large" type="primary" large/>)
    .add('Large Danger', () => <Button label="Large Danger" type="danger" large/>)
    .add('Large Success', () => <Button label="Large Success" type="success" large/>)
    .add('Large Warning', () => <Button label="Large Warning" type ="warning" large/>)
    .add("Large Default", () => <Button label="Large Default" type="default" large/>)

    .add("Light Primary", () => <Button label ="Light Primary" type="primary" light/>)
    .add("Light Danger", () => <Button label ="Light Danger" type="danger" light/>)
    .add("Light Success", () => <Button label ="Light Success" type="success" light/>)
    .add("Light Warning", () => <Button label ="Light Warning" type="warning" light/>)
    .add("Light Default", () => <Button label ="Light Default" type="default" light/>)

    .add("Large light Primary", () => <Button label ="Primary" type="primary" large light/>)
    .add("Large light Danger", () => <Button label ="Danger" type="danger" large light/>)
    .add("Large light Success", () => <Button label ="Success" type="success" large light/>)
    .add("Large light Warning", () => <Button label ="Warning" type="warning" large light/>)
    .add("Large light Default", () => <Button label ="Default" type="default" large light/>)

    .add("Cart Button", () => <Button label="Add To Cart" type="cart" icon={cart}/>)
    .add("Fav Button", () => <Button label="Add To Favorites" type="cart" icon={heart}/>)

    .add("Cart Small", () => <Button label="" type="cart" icon={cart}/>)
    .add("Fav Small", () => <Button label="" type="cart" icon={heart}/>)
