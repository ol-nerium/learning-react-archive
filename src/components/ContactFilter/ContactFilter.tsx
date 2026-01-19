import { useEffect, useState } from 'react';
import css from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '@/redux/filterSlice';

export default function ContactFilter() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  useEffect(() => {
    const timeoutHandler = setTimeout(
      () => dispatch(setFilterValue(value)),
      300
    );
    return () => clearTimeout(timeoutHandler);
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
