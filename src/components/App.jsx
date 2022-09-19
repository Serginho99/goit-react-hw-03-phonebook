import React, { Component } from 'react';
import AddContactForm from './form/AddContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './contactsList/ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from './section/Section';

export default class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = data => {
    if (this.isDuplicateContact(data)) {
      return Notify.info(
        `${data.name}: ${data.number} is already on your contact list`
      );
    }
    const contact = {
      id: nanoid(),
      ...data,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    Notify.success(`${data.name} added to your contact list`);
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  removeContact = (id, name) => {
    this.setState(prevState => {
      const newContact = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newContact,
      };
    });
    Notify.info(`${name} has been deleted`);
  };

  isDuplicateContact({ name, number }) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  }

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, removeContact, getVisibleContacts } =
      this;
    const visibleContacts = getVisibleContacts();
    return (
      <>
        <Section>
          <AddContactForm onSubmit={addContact} />
        </Section>
        <Section>
          <ContactsList
            contacts={visibleContacts}
            value={filter}
            onChange={changeFilter}
            deleteContact={removeContact}
          />
        </Section>
      </>
    );
  }
}
