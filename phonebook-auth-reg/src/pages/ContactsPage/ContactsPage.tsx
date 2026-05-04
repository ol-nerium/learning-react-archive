import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from '@/redux/contacts/operations';
import { NavLink, Outlet } from 'react-router-dom';
import ContactsFilter from '@/components/ContactsFilter/ContactsFilter';
import ContactsForm from '@/components/ContactsForm/ContactsForm';
import ContactsList from '@/components/ContactsList/ContactsList';

import css from './ContactsPage.module.css';
import ContactsControls from '@/components/ContactsControls/ContactsControls';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <ContactsControls />
      <ContactsList />
      <Outlet />
    </div>
  );
}
