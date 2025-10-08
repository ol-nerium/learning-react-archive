import css from './ContactItem.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { removeContact } from '@/redux/contactsSlice';

export default function ContactItem({
  name,
  number,
  contactKey,
}: {
  name: string;
  number: string;
  contactKey: string;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeContact(contactKey));
  };

  return (
    <li className={css.contactsListItem}>
      {name} : {number}
      <Button onClick={handleDelete}>delete</Button>
    </li>
  );
}
