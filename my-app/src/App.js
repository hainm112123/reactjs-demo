import React, { Component } from 'react';

import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import tickImg from './img/tick.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : [
        {title: "Anime", isComplete: false},
        {title: "Manga", isComplete: true},
        {title: "Gaming", isComplete: false},
      ],
    }

    // this.onItemClicked = this.onItemClicked.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
    this.onCompleteAllClicked = this.onCompleteAllClicked.bind(this);

    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
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

  onCompleteAllClicked() {
    let todoItems = this.state.todoItems;
    for (let todoItem of todoItems) {
      todoItem.isComplete = true;
    }
    this.setState({
      todoItems: todoItems,
    })
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="App">
        <div className="Header">
          <img className="complete-all" src={tickImg} alt="" onClick={this.onCompleteAllClicked}></img>
          <input className="add-item" type='text' ref={this.inputElement} placeholder='Add new item' onKeyUp={this.onEnterPressed}></input>
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
