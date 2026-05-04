import React, { useState } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.searchInput}
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
}
