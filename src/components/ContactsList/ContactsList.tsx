import css from './ContactsList.module.css';
import ContactItem from '@/components/ContactItem/ContactItem';
import type { contactType } from '@/utils/types';
import React from 'react';

const ContactsList = ({ contacts }: { contacts: { items: contactType[] } }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.items.map(({ name, number, id }) => {
        return (
          <ContactItem name={name} number={number} contactKey={id} key={id} />
        );
      })}
    </ul>
  );
};
export default React.memo(ContactsList);
