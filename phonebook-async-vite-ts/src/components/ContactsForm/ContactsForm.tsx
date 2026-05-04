import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './ContactsForm.module.css';
import Button from '@/components/Button/Button';

import { addContact } from '@/redux/contactsOps';
import type { AppDispatch } from '@/redux/store';

function ContactsForm() {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.currentTarget.name;
    const value: string = e.currentTarget.value;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!name.trim() && !number.trim()) {
      alert('fill all fields');
      return;
    }
    dispatch(addContact({ name, number }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        onChange={handleInput}
        value={name}
        required
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        name="number"
        id="number"
        autoComplete="off"
        onChange={handleInput}
        value={number}
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default React.memo(ContactsForm);
