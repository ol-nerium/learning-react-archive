import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  AddContact = (newContactData) => {
    const { name, number } = newContactData;
    const { contacts } = this.state;

    const currentContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const recurringName = contacts.find(
      (contact) => contact.name === currentContact.name
    );

    if (recurringName) {
      return alert(currentContact.name + " is already in contacts");
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, currentContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.AddContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
