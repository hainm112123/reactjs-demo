import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const item = this.props.item;
    // console.log(this.props.index);
    let className = "TodoItem";
    if (item.isComplete) className += " TodoItem--Complete"

    return (
      <div className={className} data-item-index={this.props.index} onClick={this.props.onClick}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;