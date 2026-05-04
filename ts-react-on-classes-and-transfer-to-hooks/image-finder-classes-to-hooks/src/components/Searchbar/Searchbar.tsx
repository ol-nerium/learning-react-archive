import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import css from './Searchbar.module.css';
import Button from '@/components/Button/Button';

export default function Searchbar({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) return onSubmit(inputValue);
    return alert('fill input');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <Button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>
            <FaMagnifyingGlass />
          </span>
        </Button>

        <input
          className={css['SearchForm-input']}
          id="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </header>
  );
}
