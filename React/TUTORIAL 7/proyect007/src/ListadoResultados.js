import React, { Component } from 'react';

class ListadoResultados extends Component {
    render() {
        return(
            <ul>
                {this.props.resultados.map(
                    element => (
                        <li>
                            La suma de { element.valor1 } y { element.valor2 } es: { element.resultado }
                        </li>
                    )
                )}
            </ul>
        );
    }
}

export default ListadoResultados;