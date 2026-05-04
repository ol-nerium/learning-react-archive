import type { ButtonHTMLAttributes, FC } from 'react';
import css from './Button.module.css';
import React from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: FC<Props> = ({ children, ...allyProps }) => {
  return (
    <button className={css.button} {...allyProps}>
      {children}
    </button>
  );
};
export default Button;
