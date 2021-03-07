import s from '../form.module.css'

export default function Filter({ onFilter, filteredContacts, onDeleteContact }) {
    const contacts = filteredContacts

    function handleOnFilter(e) {
        onFilter(e.currentTarget.value)
    }
    return (<ul className={s.form}>
        <h2>Contacts</h2>
        <label htmlFor="filter">Search contact by number or name</label>
        <br />
        <input
            type="text"
            name="filter"
            id="filter"
            onChange={handleOnFilter}
        />
        {contacts.map(contact => {
            return (
                <li className="contact" key={contact.id}>
                    {contact.name} {contact.number}
                    <button
                        type="button"
                        onClick={() => onDeleteContact(contact.id)}
                        className={s.button}
                    >
                        delete
                </button>
                </li>
            );
        })}
    </ul>)
}