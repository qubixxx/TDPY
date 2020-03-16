import React, { Component } from 'react';

class FormularioNumeros extends Component {
    render() {
        return(
            <form onSubmit = { this.props.onSumar }>
                <p>Valor 1: <input type="text" name="valor1"/></p>
                <p>Valor 2: <input type="text" name="valor2"/></p>
                <input type="submit" valor="Sumar"/>
            </form>
        );
    }
}

export default FormularioNumeros;