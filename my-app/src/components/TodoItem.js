import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './TodoItem.css'
import checkMark from '../img/check.png'
import checkCompleteMark from '../img/checkComplete.png'

class TodoItem extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className={classNames('TodoItem' , 
      {'TodoItem--Complete': item.isComplete})}>
        <img src={item.isComplete ? checkCompleteMark : checkMark} alt="" onClick={this.props.onClick}/>
        <p>{item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }),
  onClick: PropTypes.func,
}

export default TodoItem;