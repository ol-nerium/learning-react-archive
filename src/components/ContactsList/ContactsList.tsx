import css from './ContactsList.module.css';
import ContactItem from '@/components/ContactItem/ContactItem';
import type { RootState, contactType } from '@/utils/types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.items);
  const filter: string = useSelector((state: RootState) => state.filters.value);

  const visibleContacts = useMemo(() => {
    if (!filter.trim()) return contacts;
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter((item: contactType) => {
      const normalizeName = item.name.toLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  }, [filter, contacts]);
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ContactItem name={name} number={number} contactKey={id} key={id} />
        );
      })}
    </ul>
  );
};
export default React.memo(ContactsList);
