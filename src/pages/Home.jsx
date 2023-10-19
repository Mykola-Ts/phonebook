import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/Forms/AddContactForm';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <main>
      <Section title="Add contact">
        <AddContactForm />
      </Section>

      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
