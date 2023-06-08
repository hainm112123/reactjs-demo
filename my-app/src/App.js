import logo from './logo.svg';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      {title: "Anime", isComplete: true},
      {title: "Manga", isComplete: true},
      {title: "Game", isComplete: false},
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.todoItem.length === 0 ? 'Nothing' : this.todoItem.map((item, index) => <TodoItem key={index} item={item}></TodoItem>)
          }       
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
