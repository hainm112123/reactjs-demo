import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import { Component } from 'react';
import tickImg from './img/tick.png'

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
    this.onEnterPressed = this.onEnterPressed.bind(this);
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

  onEnterPressed(event) {
    if (event.keyCode !== 13) return;
    let text = event.target.value;
    event.target.value="";
    this.setState({
      todoItems: [
        {title: text, isComplete: false},
        ...this.state.todoItems
      ]
    })
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="App">
        <div className="Header">
          <img className="complete-all" src={tickImg} alt=""></img>
          <input className="add-item" type='text' placeholder='Add new item' onKeyUp={this.onEnterPressed}></input>
        </div>
        {
          todoItems.length === 0 ? 'Nothing' : todoItems.map((item, index) => 
          <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)}>
          </TodoItem>)
        }       
      </div>
    );
  }
}

export default App;
