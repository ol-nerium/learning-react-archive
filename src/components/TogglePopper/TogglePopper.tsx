import { Component } from 'react';

export default class TogglePopper extends Component<{
  onStateChange: () => void;
}> {
  render() {
    return (
      //   <button onClick={this.props}>
      <button onClick={this.props.onStateChange}>
        Open something interesting
      </button>
    );
  }
}
