import { v4 as uuidv4 } from 'uuid';

import { Component } from 'react';
import ToDo from './ToDo';

import todos from '@/data.json';

export default class ToDoList extends Component<
  {},
  { todoItems: Array<{ id: string; label: string }>; inputValue: string }
> {
  state = {
    todoItems: todos,
    inputValue: '',
  };

  addItem: () => void = () => {
    if (!this.state.inputValue.trim()) return; // prevent empty todos
    const newArr = [
      ...this.state.todoItems,
      { id: uuidv4(), label: this.state.inputValue },
    ];
    this.setState({ inputValue: '', todoItems: newArr });
  };

  removeItem = (id: string) => {
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.id !== id),
    });
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    return (
      <>
        <br />

        <input
          type="text"
          name="inputValue"
          id="input"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.addItem}>Add</button>
        <br />
        {this.state.todoItems.map(item => (
          <ToDo data={item} key={item.id} removeTodo={this.removeItem} />
        ))}
      </>
    );
  }
}
