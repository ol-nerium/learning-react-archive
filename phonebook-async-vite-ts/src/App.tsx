// import { useMemo } from 'react';

import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';

import { selectLoading, selectError } from '@/redux/contactsSlice';
import type { AppDispatch } from './redux/store';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsForm />
      <ContactFilter />
      {<ContactsList />}
      {loading && !error && <b>Request in progress...</b>}
      <p>{error as React.ReactNode}</p>
    </Container>
  );
}
