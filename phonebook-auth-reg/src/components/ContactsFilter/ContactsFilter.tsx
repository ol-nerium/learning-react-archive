import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './ContactsFilter.module.css';
import { setFilterValue } from '@/redux/filter/slice';

export default function ContactsFilter() {
  let [value, setValue] = useState('');
  const dispatch = useDispatch();
  function onHandleChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  useEffect(() => {
    const timeoutHandler = setTimeout(
      () => dispatch(setFilterValue(value)),
      300
    );
    return () => clearTimeout(timeoutHandler);
  }, [value]);

  return (
    <div className={css.filter}>
      <label className={css.filterCaption} htmlFor="filterInput">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filterInput"
        name="filterInput"
        className={css.filterInput}
        value={value}
        onChange={onHandleChange}
      />
    </div>
  );
}
