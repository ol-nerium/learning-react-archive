import { useEffect, useMemo } from 'react';

import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';

import type { contactType, RootState } from '@/utils/types';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts: { items: contactType[] } = useSelector(
    (state: RootState) => state.contacts
  );
  // console.log(contacts);
  const filter: string = useSelector((state: RootState) => state.filters.value);

  const visibleContacts = useMemo(() => {
    if (!filter.trim()) return contacts;
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.items.filter((item: contactType) => {
      const normalizeName = item.name.toLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  }, [filter, contacts]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <ContactsForm />
      <ContactFilter />
      <ContactsList contacts={visibleContacts} />
    </Container>
  );
}
