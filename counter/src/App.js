import {Component} from 'react'
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }
  increment = () =>{
    this.setState({
      contador: this.state.contador + 1
    })
  }  
  decrement = () =>{
    this.setState({
      contador: this.state.contador - 1
    })
  }
  clear = () => {
    this.setState({
      contador: 0
    })
  }
  render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Contador: 
          </p>
          <button onClick={this.increment}>+</button>
            {this.state.contador}
          <button onClick={this.decrement}>-</button>
          <br/>
          <button onClick={this.clear}>Clear</button>
        </header>
      </div>
    );
  } 
}

export default App;
