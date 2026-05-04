// import { useMemo } from 'react';

import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';

export default function App() {
  return (
    <Container>
      <ContactsForm />
      <ContactFilter />
      <ContactsList />
    </Container>
  );
}
