import { NavLink } from 'react-router-dom';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import css from './ContactsControls.module.css';

export default function ContactsControls() {
  return (
    <div className={css.contactsControls}>
      <ContactsFilter />
      <NavLink to="addcontact" className={css.addBtn}>
        Add contact
      </NavLink>
    </div>
  );
}
