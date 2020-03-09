import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.presion = this.presion.bind(this);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.presion}>
          <p>Valor 1: <input type="number" name="valor1"/></p>
          <p>Valor 2: <input type="number" name="valor2"/></p>
          <p>Resultado: <input type="submit" name="result"/></p>
        </form>
      </div>
    );
  }

  presion(e) {
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value, 10);
    const v2 = parseInt(e.target.valor2.value, 10);
    const result = v1 + v2;
    alert('El resultado es: '+result);
  }

}

export default App;