import { Component } from 'react';
import { v4 as randomID } from 'uuid';
import Form from './Components/Form';
import Filter from './Components/Filter';
import Container from './Components/Container';
import s from './form.module.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Roman Konopelko',
        number: '111-222-333',
      },
      {
        id: 'id-2',
        name: 'Millhouse Manastorm',
        number: '111-222-333',
      },
      {
        id: 'id-3',
        name: 'Poke Poke',
        number: '111-222-333',
      },
    ],
    filter: '',
  };

  randomID = randomID();

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  getFilteredContats = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.includes(this.state.filter),
    );
  };

  onFilter = data => {
    console.log(data);
    return this.setState({
      filter: data,
    });
  };

  onSubmit = data => {
    const newContact = {
      id: randomID(),
      name: data.name,
      number: data.number,
    };
    const existedContact = this.state.contacts.filter(
      contact =>
        contact.name === newContact.name ||
        contact.number === newContact.number,
    );
    existedContact.length === 0
      ? this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }))
      : alert('this contact or number already exist');
  };

  render() {
    const filteredContacts =
      this.getFilteredContats() || this.getFilteredNumbers();
    return (
      <Container className={s.form__container} title="Phonebook">
        <Form onSubmit={this.onSubmit} />
        <Filter
          onFilter={this.onFilter}
          filteredContacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
export default App;
