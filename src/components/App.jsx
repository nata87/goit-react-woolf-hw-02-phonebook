import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { name, contacts, number } = this.state;
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
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
