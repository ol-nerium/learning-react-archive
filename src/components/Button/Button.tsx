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
    _: {}
  ): boolean {
    if (
      this.props.type === prevProps.type ||
      this.props.onClick === prevProps.onClick
    ) {
      console.log('will not be updated', prevProps, this.props);
      return false;
    } else return true;
  }

  render() {
    const { children, className, type, onClick, ...allyProps } = this.props;
    return (
      <button
        className={` ${className ?? ''} ${css.Button}`}
        {...allyProps}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
