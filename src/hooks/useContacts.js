import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);

  return contacts;
};
