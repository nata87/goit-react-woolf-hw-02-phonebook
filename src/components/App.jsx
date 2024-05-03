import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, contacts } = this.state;
    if (name.trim() === '') return;
    const newContact = {
      id: nanoid(), // Генеруємо унікальний id за допомогою пакету nanoid
      name: name.trim(),
    };
    this.setState({
      contacts: [...contacts, newContact], // Додаємо новий контакт до списку
      name: '', // Очищуємо поле вводу імені
    });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <AddContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
