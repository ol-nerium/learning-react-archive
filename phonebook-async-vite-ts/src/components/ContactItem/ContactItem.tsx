import css from './ContactItem.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from '@/redux/contactsOps';
import type { AppDispatch } from '@/redux/store';

export default function ContactItem({
  name,
  number,
  contactKey,
}: {
  name: string;
  number: string;
  contactKey: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => {
    dispatch(deleteContact(contactKey));
  };

  return (
    <li className={css.contactsListItem}>
      <p>
        {name} : {number}
      </p>
      <Button onClick={handleDelete}>x</Button>
    </li>
  );
}
