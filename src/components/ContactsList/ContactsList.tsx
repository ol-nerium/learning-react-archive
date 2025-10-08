import css from './ContactsList.module.css';
import ContactItem from '@/components/ContactItem/ContactItem';
import type { stateType } from '@/utils/types';
import React from 'react';

const ContactsList = ({
  contacts,
  onDelete,
}: {
  contacts: stateType[];
  onDelete: (key: string) => void;
}) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, key }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            onDelete={onDelete}
            contactKey={key}
            key={key}
          />
        );
      })}
    </ul>
  );
};
export default React.memo(ContactsList);
