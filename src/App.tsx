import { useEffect, useState } from 'react';
import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';

import type { stateType } from '@/utils/types';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storageContacts: stateType[] = JSON.parse(
      localStorage.getItem('contacts') as string
    );
    if (storageContacts !== null) return storageContacts;
    return [];
  });
  const [filter, setFilter] = useState<string>('');

  const filterChange = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleDelete = (key: string): void => {
    setContacts(contacts =>
      contacts.filter((contact: stateType) => contact.key !== key)
    );
  };

  const filterContacts = (filterValue: string): stateType[] => {
    if (filterValue.trim()) {
      return contacts.filter((item: stateType) => {
        const normalizeName = item.name.toLowerCase().trim();
        const normalizeFilter = filterValue.toLowerCase().trim();
        return normalizeName.includes(normalizeFilter);
      });
    }
    return contacts;
  };

  const handleSubmit = (newContact: stateType): void => {
    if (
      contacts.find((contact: stateType) => contact.name === newContact.name)
    ) {
      alert('name already existes in the list');
      return;
    }
    setContacts(contacts => [...contacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <ContactsForm onSubmit={handleSubmit} />
      <ContactsList contacts={filterContacts(filter)} onDelete={handleDelete} />
      <ContactFilter onChange={filterChange} />
    </Container>
  );
}
