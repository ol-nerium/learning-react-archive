import { Component } from 'react';
import image from './image.jpg';
console.log(image);

export default class Popper extends Component {
  render() {
    return (
      <div>
        <img src={image} alt="pic" />
      </div>
    );
  }
}
