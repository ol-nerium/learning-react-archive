import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from './ContactsList.module.css';
import { deleteContact } from '@/redux/contacts/operations';
import { selectAllContacts } from '@/redux/contacts/selectors';
import { selectFilter } from '@/redux/filter/selectors';

export default function ContactsList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilter).toLowerCase();
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterValue)
  );

  function onDeleteContact(id) {
    // console.log(id);
    dispatch(deleteContact(id));
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((i: any) => (
        <li key={i.id} className={css.contactListItem}>
          <div className={css.contactListTextContent}>
            <p className={css.contactListText}>
              Name: <span>{i.name}</span>
            </p>
            <p className={css.contactListText}>
              Number: <span>{i.number}</span>
            </p>
          </div>
          <div className={css.contactListControls}>
            <button
              onClick={() => onDeleteContact(i.id)}
              className={css.contactListBtn}
            >
              delete
            </button>
            <NavLink to={`${i.id}`} className={css.openModalNavLink}>
              edit
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
