import './App.css';

import Clicker from '@/components/clicker';

import { Component } from 'react';

class App extends Component {
  state: { value: number } = {
    value: 0,
  };

  // constructor() {
  //   super();
  // }

  increaseValue: (value: number) => void = prevValue => {
    this.setState({
      value: prevValue + 1,
    });
  };

  decreaseValue: (value: number) => void = prevValue => {
    this.setState({
      value: prevValue - 1,
    });
  };

  render() {
    return (
      <>
        <Clicker />
      </>
    );
  }
}

export default App;
