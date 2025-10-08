import { useEffect, useMemo } from 'react';

import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';

import type { stateType } from '@/utils/types';
import { useSelector } from 'react-redux';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const storageContacts: stateType[] = JSON.parse(
  //     localStorage.getItem('contacts') as string
  //   );
  //   if (storageContacts !== null) return storageContacts;
  //   return [];
  // });

  // const [filter, setFilter] = useState<string>('');
  // const filterChange = (filterValue: string) => {
  //   setFilter(filterValue);
  // };

  const contacts = useSelector(state => state.items.contacts);
  const filter = useSelector(state => state.filter.value);

  const visibleContacts = useMemo(() => {
    if (!filter.trim()) return contacts;
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter((item: stateType) => {
      const normalizeName = item.name.toLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  }, [filter, contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <ContactsForm />
      <ContactFilter />
      <ContactsList contacts={visibleContacts} />
    </Container>
  );
}
