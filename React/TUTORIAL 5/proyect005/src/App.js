import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articulos: [
                {
                    codigo:1,
                    descripcion: 'Manzana',
                    precio: 15.3
                },
                {
                    codigo:2,
                    descripcion: 'Naranja',
                    precio: 13.50
                },
                {
                    codigo:3,
                    descripcion: 'Pera',
                    precio: 18.50
                }
            ],
            articulos2: [
                {
                    codigo:1,
                    descripcion: 'Manzana',
                    precio: 15.3
                },
                {
                    codigo:2,
                    descripcion: 'Naranja',
                    precio: 13.50
                },
                {
                    codigo:3,
                    descripcion: 'Pera',
                    precio: 18.50
                }
            ]
        }
        this.eliminarUltimaFila = this.eliminarUltimaFila.bind(this);
        this.borrar = this.borrar.bind(this);
    }

    render() {
        return(
            <div>
                <div>
                    <table>{/* <table border = '1'> */}
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.articulos.map(
                                elemento1 => {
                                    return(
                                        <tr key = { elemento1.codigo }>
                                            <td>{ elemento1.codigo }</td>
                                            <td>{ elemento1.descripcion }</td>
                                            <td>{ elemento1.precio }</td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                    <br/>
                    <button onClick = { this.eliminarUltimaFila }>Eliminar Ultima Fila</button>
                </div>
                <hr/>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.articulos2.map(
                                elemento2 => {
                                    return(
                                        <tr key = { elemento2.codigo }>
                                            <td>{ elemento2.codigo }</td>
                                            <td>{ elemento2.descripcion }</td>
                                            <td>{ elemento2.precio }</td>
                                            <td>
                                                <button onClick={ () => this.borrar(elemento2.codigo) }>Borrar</button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
    eliminarUltimaFila() {
        if(this.state.articulos.length > 0) {
            var temp = this.state.articulos;
            temp.pop();
            this.setState({
                articulos: temp
            })
        }
    }

    borrar(cod) {
        var temp = this.state.articulos2.filter((el) => el.codigo !== cod);
        this.setState({
            articulos2: temp
        })
    }

}

export default App;