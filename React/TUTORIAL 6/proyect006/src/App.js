import React, { Component } from 'react';
import './App.css';
import Dado from './Dado';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor0: this.generarValor(),
            valor1: this.generarValor(),
            valor2: this.generarValor()
        }
        this.tirar = this.tirar.bind(this);
    }

    render() {
        return(
            <div>
                <Dado valor = { this.state.valor0 }/>
                <Dado valor = { this.state.valor1 }/>
                <Dado valor = { this.state.valor2 }/>
                <button onClick = { this.tirar }>Tirar</button>
            </div>
        );
    }

    generarValor() {
        return Math.trunc(Math.random() * 6) + 1;
    }

    tirar() {
        this.setState({
            valor0: this.generarValor(),
            valor1: this.generarValor(),
            valor2: this.generarValor()
        })
    }

}

export default App;