import { Component } from 'react';
import image from './image.jpg';
// console.log(image);

export default class Popper extends Component {
  render() {
    return (
      <div className="popperWrap">
        <img src={image} alt="pic" />
      </div>
    );
  }
}
