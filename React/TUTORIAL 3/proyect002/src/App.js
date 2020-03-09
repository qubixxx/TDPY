import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    const siglo = 21;
    const persona = {
      nombre: 'Juan',
      edad: 34
    };
    const buscadores=['http://www.google.com',
                      'http://www.bing.com',
                      'http://www.yahoo.com'];

    return (
      <div>
        <div>
          <h1>Titulo Nivel 1</h1>
          <hr/>
          <p>Estamos en el siglo {siglo}</p>
          <h3>Acceso a un Objeto</h3>
          <p>{persona.nombre} tiene {persona.edad} años</p>
          <h3>Llamada a un método</h3>
          <p>Valor aleatorio llamando a un método</p>
          {this.retornarAleatorio()}
          <h3>Calculo inmediato de expresiones</h3>
          3+3 = {3+3}
        </div>
        <div>
          <hr/>
          <a href={buscadores[0]}>Google</a><br/>
          <a href={buscadores[1]}>Bing</a><br/>
          <a href={buscadores[2]}>Yahoo</a><br/>
        </div>
      </div>
    );
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }
}

export default App;