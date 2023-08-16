import React, { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import { Container } from './ContactForm/ContactForm.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  isNameAlreadyExists = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    const isPhonebookEmpty = contacts.length === 0;

    return (
      <Container>
        <h1>Phonebook</h1>
        {isPhonebookEmpty && <Notification message="Add first contact!" />}
        <ContactForm
          addContact={this.addContact}
          isNameAlreadyExists={this.isNameAlreadyExists}
        />

        {!isPhonebookEmpty ? (
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}>
            {!isPhonebookEmpty && filterContacts.length === 0 && (
              <Notification message="nothing found" />
            )}
          </ContactList>) : (<Notification message="Your phonebook is empty." />)}
      </Container>
    );
  }
}

