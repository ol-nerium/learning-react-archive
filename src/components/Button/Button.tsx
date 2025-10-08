import { useEffect, type ReactNode } from 'react';
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
  useEffect(() => {}, [className, type]);

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
