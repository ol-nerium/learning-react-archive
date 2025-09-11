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

// // more old way to right classes, rewrited and commented for learning reasons

// export default class Clicker extends Component<
//   { step: number; initialValue: number },
//   { value: number }
// > {
//   // <MyProps, MyState>
//   static defaultProps: { step: number; initialValue: number } = {
//     step: 1,
//     initialValue: 0,
//   };

//   constructor(props: { step: number; initialValue: number }) {
//     super(props);
//     this.state = {
//       value: this.props.initialValue,
//     };
//     this.increaseValue = this.increaseValue.bind(this);
//     this.decreaseValue = this.decreaseValue.bind(this);
//   }

//   // increaseValue(evt: React.MouseEvent<HTMLButtonElement>): void {
//   increaseValue(): void {
//     this.setState({
//       value: this.state.value + this.props.step,
//     });
//   }

//   // decreaseValue(evt: React.MouseEvent<HTMLButtonElement>): void {
//   decreaseValue(): void {
//     this.setState({
//       value: this.state.value - this.props.step,
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>Click-Clack in classes, motherfucker!</h1>
//         <p>
//           Value:
//           <span> {this.state.value}</span>
//         </p>
//         <button onClick={this.decreaseValue}>Click -</button>
//         <button onClick={this.increaseValue}>Click +</button>
//       </>
//     );
//   }
// }
