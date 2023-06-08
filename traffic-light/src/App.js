import { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    }
    setInterval(() => {
      this.setState({
        currentColor: (this.state.currentColor + 1) % 3,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <TrafficLight currentColor={this.state.currentColor}></TrafficLight>
      </div>
    );
  }
}

export default App;
