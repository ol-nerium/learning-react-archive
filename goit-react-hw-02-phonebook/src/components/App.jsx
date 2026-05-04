import { nanoid } from 'nanoid';

import { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };

    this.setState(prevState => {
      const isUnique = prevState.contacts.find(
        contact => contact.name === name
      );
      return isUnique === undefined
        ? { contacts: [newContact, ...prevState.contacts] }
        : alert(`${name} already in the contact list`);
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const filterStr = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterStr)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Section title="Phonebook">
          <Form onHandleSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} handleChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
