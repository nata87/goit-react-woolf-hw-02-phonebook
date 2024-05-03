import React, { Component } from 'react';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  setContacts = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm setContacts={this.setContacts} />
        <p>Contacts</p>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
