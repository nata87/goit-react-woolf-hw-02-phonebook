import React, { Component } from 'react';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  setContacts = newContact => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase() === newContact.name.trim().toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else {
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.length
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  deleteContact = deletedId => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(({ id }) => deletedId !== id),
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm setContacts={this.setContacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
