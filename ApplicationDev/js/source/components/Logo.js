import React from 'react';   // ECMAScript规范  模块化方案之一
// var React = require('react');    // CommonJS规范   模块化方案之一

class Logo extends React.Component{
    render () {
        return (
            <div className="Logo" />
        )
    }
};

export default Logo;
// module.exports = Logo;