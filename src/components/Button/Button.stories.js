import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';





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
    // .add('Success', () => <Button label="Success" type="success" outline/>)