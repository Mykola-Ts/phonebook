import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);

  return contacts;
};

export const useVisibleContacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return visibleContacts;
};
