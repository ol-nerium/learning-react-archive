import css from './ContactItem.module.css';
import Button from '../Button/Button';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '@/redux/store';

export default function ContactItem({
  name,
  number,
  contactKey,
  onDelete,
}: {
  name: string;
  number: string;
  contactKey: string;
  onDelete: (key: string) => void;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeContact(contactKey));
  };

  // const handleDelete = useCallback(
  //   () => onDelete(contactKey),
  //   [onDelete, contactKey]
  // );
  return (
    <li className={css.contactsListItem}>
      {name} : {number}
      <Button onClick={handleDelete}>delete</Button>
    </li>
  );
}
