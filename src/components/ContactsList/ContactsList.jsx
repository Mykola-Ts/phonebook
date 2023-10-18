import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { ListItem, NoContactsText } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length ? (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </ul>
  ) : (
    <NoContactsText>No contacts found for the entered name</NoContactsText>
  );
};
