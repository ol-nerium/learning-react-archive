import { Component } from 'react';

export default class ToDo extends Component<{
  data: { id: string; label: string };
  removeTodo: (id: string) => void;
}> {
  render() {
    const { id, label }: { id: string; label: string } = this.props.data;
    return (
      <>
        <label htmlFor={id}>
          {label}:
          <input type="checkbox" name="" id={id} />
          <button onClick={() => this.props.removeTodo(id)}>X</button>
        </label>
        <br />
      </>
    );
  }
}
