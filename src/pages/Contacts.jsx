import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useContacts, useVisibleContacts } from 'hooks/useContacts';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectFilterValue } from 'redux/filter/selectors';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { SortContacts } from 'components/SortContacts/SortContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { NoContactsText, TotalContacts } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const visibleContacts = useVisibleContacts();
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
              {!filter && (
                <TotalContacts>Total contacts: {contacts.length}</TotalContacts>
              )}

              {filter && visibleContacts.length > 0 && (
                <TotalContacts>
                  {`Total of contacts found for the query: ${visibleContacts.length}`}
                </TotalContacts>
              )}

              {visibleContacts.length > 0 && <SortContacts />}

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
