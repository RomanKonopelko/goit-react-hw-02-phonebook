import { Component } from 'react'
import { v4 as randomID } from 'uuid';

export default class Phonebook extends Component {
    state = {
        contacts: [
            {
                id: 'id-1',
                name: 'Roman Konopelko',
                number: '111-222-333'
            },
            {
                id: 'id-2',
                name: 'Millhouse Manastorm',
                number: '111-222-333'
            },
            {
                id: 'id-3',
                name: 'Poke Poke',
                number: '111-222-333'
            }],
        filter: '',
        name: '',
        number: ''
    }
    nameInputId = randomID();
    numberInputId = randomID();
    randomID = randomID();

    handleChange = e => {
        const { value, name } = e.currentTarget;
        this.setState({
            [name]: value
        })
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    onDeleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact =>
                contactId !== contact.id
            )
        }))
    }


    getFilteredContats = () => {
        const normalizeFilter = this.state.filter.toLowerCase()
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter)
        )
    }
    onFilter = (e) => {
        this.setState({
            filter: e.currentTarget.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const existedContact = this.state.contacts.filter(contact => (
            contact.name === this.state.name
        ))
        existedContact.length === 0 ? this.setState(prevState => ({
            contacts: [{
                id: randomID(),
                name: this.state.name,
                number: this.state.number
            }, ...prevState.contacts]
        }))
            : alert('this contact already exist')
        this.reset();
    }

    render() {
        const filteredContacts = this.getFilteredContats();
        return (
            <div className="form__container" >
                <form className="form" onSubmit={this.onSubmit}>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <input type="text" id={this.nameInputId} name='name' value={this.state.name} onChange={this.handleChange} /><br />
                    <label htmlFor={this.numberInputId}>Number</label>
                    <input type="text" id={this.numberInputId} name='number' value={this.state.number} onChange={this.handleChange} /><br />
                    <button type='submit'>Add contact</button>
                </form>
                <ul>
                    <h2>Contacts</h2>
                    <label htmlFor="filter">Search contact by name</label><br />
                    <input type="text" name="filter" id="filter" onChange={this.onFilter} />
                    {filteredContacts.map(contact => {
                        return <li className="contact" key={contact.id}>{contact.name} {contact.number} <button type='button' onClick={() => this.onDeleteContact(contact.id)}>delete</button></li>
                    })}
                </ul>
            </div>
        )
    }
}