import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            handleDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
