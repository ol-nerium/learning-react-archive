import { Component, useEffect, type ReactNode } from 'react';
import css from './Button.module.css';

interface propsType {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: string;
}

export default function Button({
  children,
  className,
  type,
  onClick,
  ...allyProps
}: propsType) {
  useEffect(() => {
    console.log('btn is rerendering but who cares');
  }, [className, type, onClick]);

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

class OldButton {
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
      this.props.className === prevProps.className &&
      this.props.type === prevProps.type &&
      this.props.onClick === prevProps.onClick
    ) {
      return false;
    }
    return true;
  }

  render() {}
}

// export default Button;
