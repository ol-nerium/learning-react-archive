import { Component } from 'react';

export default class ToDo extends Component<{
  data: { id: string; label: string };
  removeTodo: (id: string) => void;
}> {
  state = {
    checked: false,
  };

  onChangeCheck = (prevStateCheck: boolean) => {
    this.setState({
      checked: !prevStateCheck,
    });
  };
  render() {
    const { id, label }: { id: string; label: string } = this.props.data;
    return (
      <>
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={label}
            id={id}
            checked={this.state.checked}
            onClick={() => this.onChangeCheck(this.state.checked)}
          />
          {label}:<button onClick={() => this.props.removeTodo(id)}>X</button>
        </label>
        <br />
      </>
    );
  }
}
