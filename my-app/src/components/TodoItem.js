import React, { Component } from 'react'
import './TodoItem.css'
import checkMark from '../img/check.png'
import checkCompleteMark from '../img/checkComplete.png'

class TodoItem extends Component {
  render() {
    const item = this.props.item;
    // console.log(this.props.index);
    let className = "TodoItem";
    if (item.isComplete) className += " TodoItem--Complete"

    return (
      <div className={className}>
        <img src={item.isComplete ? checkCompleteMark : checkMark} alt="" onClick={this.props.onClick}/>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;