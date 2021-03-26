import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(
    App, 
    domContainer
);