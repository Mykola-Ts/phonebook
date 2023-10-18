import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { NoContactsText } from './Contacts.styled';
import { useContacts } from 'hooks/useContacts';

const Contacts = () => {
  const contacts = useContacts();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(error => {
        toast.remove();
        toast.error('Oops, something went wrong. Try reloading the page.');
      });
  }, [dispatch]);

  return (
    <main>
      {!error ? (
        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Filter />
              <ContactsList />
            </>
          ) : (
            <NoContactsText>No contacts</NoContactsText>
          )}

          {isLoading && <Loader />}
        </Section>
      ) : (
        <Error />
      )}
    </main>
  );
};

export default Contacts;
