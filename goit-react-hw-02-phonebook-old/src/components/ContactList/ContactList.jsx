import React from "react";
import PropTypes from "prop-types";

import { Button, ContactListElement } from "./ContactList.styled";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => {
        const { name, number, id } = contact;
        return (
          <ContactListElement key={id}>
            {name + ": " + number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Удалить
            </Button>
          </ContactListElement>
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
