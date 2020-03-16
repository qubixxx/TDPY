import React, { Component } from 'react';
import './App.css';
import ListadoResultados from './ListadoResultados';
import FormularioNumeros from './FormularioNumeros';

class App extends Component {
    constructor(props) {
        super(props)
        this.sumar = this.sumar.bind(this);
        this.state = {
            resultados: []
        }
    }
    
    render() {
        return(
            <div>
                <FormularioNumeros onSumar = { this.sumar }/>
                <ListadoResultados resultados = { this.state.resultados }/>
            </div>
        );
    }

    sumar(e) {
        e.preventDefault();
        const v1 = parseInt(e.target.valor1.value, 10);
        const v2 = parseInt(e.target.valor2.value, 10);
        const result = v1 + v2;
        const nuevo = {
            resultado: result,
            valor1: v1,
            valor2: v2
        }
        const vect = this.state.resultados;
        vect.unshift(nuevo);
        this.setState({
            resultados: vect
        })
    }
    
}

export default App;