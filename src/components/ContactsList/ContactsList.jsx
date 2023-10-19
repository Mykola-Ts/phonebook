import { Contact } from 'components/Contact/Contact';
import { ListItem, NoContactsText } from './ContactsList.styled';
import { useVisibleContacts } from 'hooks/useContacts';

export const ContactsList = () => {
  const contacts = useVisibleContacts();

  return contacts.length ? (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </ul>
  ) : (
    <NoContactsText>
      No contacts found for the entered name or number
    </NoContactsText>
  );
};
