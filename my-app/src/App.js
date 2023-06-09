import logo from './logo.svg';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : [
        {title: "Anime", isComplete: true},
        {title: "Manga", isComplete: true},
        {title: "Game", isComplete: false},
      ],
    }

    // this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            todoItems.length === 0 ? 'Nothing' : todoItems.map((item, index) => 
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)}>
            </TodoItem>)
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
