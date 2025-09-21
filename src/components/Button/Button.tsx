import { Component, type ReactNode } from 'react';
import css from './Button.module.css';

class Button extends Component<
  {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: string;
  },
  {}
> {
  componentDidUpdate(
    prevProps: Readonly<{
      children: ReactNode;
      className?: string;
      type?: string;
      onClick?: () => void;
    }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): boolean {
    // console.log('updated', prevProps, this.props);
    if (this.props.type === prevProps.type) {
      return false;
    } else return true;
  }

  render() {
    const { children, className, type, onClick, ...allyProps } = this.props;
    return (
      <button className={` ${className ?? ''} ${css.Button}`} {...allyProps}>
        {children}
      </button>
    );
  }
}

export default Button;
