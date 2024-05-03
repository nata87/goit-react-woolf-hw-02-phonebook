import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    if (name.trim() === '') return;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    return (
      <div>
        <p>Phonebook</p>
        <AddContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
        />
        <p>Contacts</p>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
