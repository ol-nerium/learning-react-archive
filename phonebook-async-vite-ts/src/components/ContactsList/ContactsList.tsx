import css from './ContactsList.module.css';
import ContactItem from '@/components/ContactItem/ContactItem';
import type { contactType } from '@/utils/types';
import React from 'react';

import { selectFilteredContacts } from '@/redux/contactsSlice';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ name, number, id }: contactType) => {
        return (
          <ContactItem name={name} number={number} contactKey={id} key={id} />
        );
      })}
    </ul>
  );
};
export default React.memo(ContactsList);
