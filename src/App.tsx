import './App.css';

import Clicker from '@/components/Clicker/Clicker';
import Popper from '@/components/Popper/Popper';
import TogglePopper from '@/components/TogglePopper/TogglePopper';
import { Component } from 'react';

class App extends Component {
  state: { isPopperOpen: boolean } = {
    isPopperOpen: false,
  };

  togglePopperVisibility = (): void => {
    this.setState({
      isPopperOpen: !this.state.isPopperOpen,
    });
  };

  render() {
    return (
      <>
        <Clicker />
        <TogglePopper onStateChange={this.togglePopperVisibility} />
        {this.state.isPopperOpen && <Popper />}
      </>
    );
  }
}

export default App;
