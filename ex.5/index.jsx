import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, { Segundo } from './componente';

ReactDOM.render(
    <div>
        <Primeiro value='Show!' />,
        <Segundo value='Show!' /> 
    </div>,
    document.getElementById('app')
);
