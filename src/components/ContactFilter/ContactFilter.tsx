// import React, { Component, type ReactNode } from 'react';
import { useEffect, useState } from 'react';
import css from './ContactFilter.module.css';

export default function ContactFilter({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <form className={css.form}>
      <label htmlFor="filter" className={css.label}>
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        className={css.input}
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}
