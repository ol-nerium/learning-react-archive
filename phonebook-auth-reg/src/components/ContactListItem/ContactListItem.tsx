import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import css from './ContactListItem.module.css';
import { selectAllContacts } from '@/redux/contacts/selectors';
import { updateContact } from '@/redux/contacts/operations';

export default function ContactListItem() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { taskId } = useParams();
  const contacts = useSelector(selectAllContacts);
  const currentContact = contacts.find(item => item.id === taskId);

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
    }
  }, []);

  function handleChange(e) {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'number') setNumber(e.target.value);
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      updateContact({
        id: taskId,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
  }

  return (
    <form className={css.contactForm} onSubmit={handleContactSubmit}>
      <label htmlFor="name" className={css.contactFormLabel}>
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className={css.contactFormInput}
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="number" className={css.contactFormLabel}>
        Number
      </label>
      <input
        type="text"
        id="number"
        name="number"
        className={css.contactFormInput}
        onChange={handleChange}
        value={number}
      />
      <button type="submit" className={css.contactFormBtn}>
        Update contact
      </button>
    </form>
  );
}
