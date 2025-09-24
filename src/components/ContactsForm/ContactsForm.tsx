import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactsForm.module.css';
import Button from '@/components/Button/Button';

import type { stateType } from '@/utils/types';

export default function ContactsForm({
  onSubmit,
}: {
  onSubmit: (newContact: stateType) => void;
}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [key, setKey] = useState(nanoid());

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
    onSubmit({ name, number, key });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
    setKey(nanoid());
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
        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
