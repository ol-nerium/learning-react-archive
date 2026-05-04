import { useDispatch } from 'react-redux';

import css from './ContactsForm.module.css';
import { createContact } from '@/redux/contacts/operations';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';

export default function ContactsForm() {
  const dispatch = useDispatch();
  function onAddContact(e) {
    const formData = e;

    dispatch(
      createContact({
        name: formData.get('name'),
        number: formData.get('number'),
      })
    );
  }

  return (
    <form action={onAddContact} className={css.addContactForm}>
      <label htmlFor="name" className={css.addContactFormLabel}>
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className={css.addContactFormInput}
      />
      <label htmlFor="number" className={css.addContactFormLabel}>
        Number
      </label>
      <input
        type="text"
        id="number"
        name="number"
        className={css.addContactFormInput}
      />
      <button type="submit" className={css.addContactFormBtn}>
        Add contact
      </button>
    </form>
  );
}
