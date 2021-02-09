import { Component } from 'react';
import './App.css';
import { Contador } from './contador';

class App extends Component {

  //  constructor by default
  // constructor(...args) {
  //   super(...args);
  // }

  //  constructor(props) {
  //     super(props);
  //  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Contador />
      </div>
    );
  }
}

// function saludar(saludo = 'Hola') {
//   console.log(`${saludo}`)
// }

// saludar();

App.defaultProps = {
  title: 'Titulo por defecto'
}

export default App;
