'use strict';
// 使用严格模式
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

ReactDOM.render(
    <h1>
        <Logo /> Welcome to the app!
    </h1>,
    document.getElementById('app')
);

