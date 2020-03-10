import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.generarAleatorio = this.generarAleatorio.bind(this);
        this.generarAleatorios = this.generarAleatorios.bind(this);
        this.state = {
            numero: 0,
            numeros: []
        }
    }

    render() {
        return(
            <div>
                <div>
                    <p>Numero Aleatorio: { this.state.numero }</p>
                    <button onClick = { this.generarAleatorio }>Generar Numero Aleatorio</button>
                </div>
                <hr/>
                <div>
                    <p>Numeros Aleatorios:</p>
                    {this.state.numeros.map(
                        function(num) {
                            return(<p>{ num }</p>);
                        }
                    )}
                    <button onClick = { this.generarAleatorios }>Generar Numeros Aleatorios</button>
                </div>
            </div>
        );
    }

    generarAleatorio() {
        const v = Math.trunc(Math.random() * 10);
        this.setState({
            numero: v
        })
    }

    generarAleatorios() {
        const vec = new Array(5);
        for(let x = 0; x < vec.length; x++) {
            vec[x] = Math.trunc(Math.random() * 10);
        }
        this.setState({
            numeros: vec
        })
    }
}

export default App;