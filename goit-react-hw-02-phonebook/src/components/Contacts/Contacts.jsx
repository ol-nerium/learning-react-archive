const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className="contacts">
      {contacts.map(contact => (
        <li key={contact.id} className="contacts__item">
          {contact.name} : {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
