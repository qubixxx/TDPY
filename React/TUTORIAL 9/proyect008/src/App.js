import React, { Component } from 'react';
import './App.css';
import Reloj from './Reloj';

class App extends Component {
    render() {
        return(
            <div>
                <h1>
                    <Reloj/>
                </h1>
            </div>
        );
    }
}

export default App;