import { Component } from 'react';

export default class Clicker extends Component {
  state: { value: number } = {
    value: 0,
  };

  increaseValue: (prevValue: number) => void = prevValue => {
    if (prevValue > 9) alert('why you still clicking, stepbro?');
    this.setState({
      value: prevValue + 1,
    });
  };

  decreaseValue: (prevValue: number) => void = prevValue => {
    if (prevValue < -9) alert('why you still clicking, stepbro?');

    this.setState({
      value: prevValue - 1,
    });
  };

  render() {
    return (
      <>
        <h1>Click-Clack in classes, motherfucker!</h1>
        <p>
          Value:
          <span> {this.state.value}</span>
        </p>
        <button onClick={() => this.decreaseValue(this.state.value)}>
          Click -
        </button>
        <button onClick={() => this.increaseValue(this.state.value)}>
          Click +
        </button>
      </>
    );
  }
}
