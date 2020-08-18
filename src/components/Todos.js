import React, { Component } from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';


class Todos extends Component {

  //render needed to render the components in browser.
  render(){
    return this.props.todos.map((todo)=>(
    <Todoitems  key= {todo.id} todo={todo} markDone={this.props.markDone}
    deletetodo={this.props.deletetodo}/>
    ));
  }
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
