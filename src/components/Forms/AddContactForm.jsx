import { lazy, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';
import { IoMdPersonAdd } from 'react-icons/io';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/operations';
import {
  contactSchema,
  defaultErrorText,
  isIncludesContact,
} from 'helpers/helpers';
import {
  Error,
  Label,
  NameInputIcon,
  NumberInputIcon,
  StyledInput,
  WrapperInput,
} from './Form.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const AddContactSuccessModal = lazy(() =>
  import('../AddContactSuccessModal/AddContactSuccessModal')
);

const body = document.body;

export const AddContactForm = () => {
  const contacts = useContacts();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isExistContact = isIncludesContact(contacts, name, number);

    if (isExistContact) {
      setErrorText(isExistContact);

      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(resp => {
        toast.remove();
        toast.success(`${name} added to contacts`);

        setModalIsOpen(true);
        body.style.overflow = 'hidden';
      })
      .catch(error => {
        toast.remove();
        toast.error(defaultErrorText);
      });

    resetForm();
  };

  const onInput = () => {
    setErrorText('');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    body.style.overflow = '';
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={onSubmit}
        validationSchema={contactSchema}
      >
        <Form>
          <Label>
            Name
            <WrapperInput>
              <StyledInput
                type="text"
                name="name"
                placeholder="First name Last name"
                onInput={onInput}
              />
              <NameInputIcon size={18} />
            </WrapperInput>
            <ErrorMessage name="name" component={Error} />
          </Label>

          <Label>
            Number
            <WrapperInput>
              <StyledInput
                type="tel"
                name="number"
                placeholder="000-00-00"
                onInput={onInput}
              />
              <NumberInputIcon />
            </WrapperInput>
            <ErrorMessage name="number" component={Error} />
          </Label>

          {errorText && (
            <Error style={{ marginBottom: '28px', textAlign: 'center' }}>
              {errorText}
            </Error>
          )}

          <PrimaryButton type="submit" className="centered-btn">
            <IoMdPersonAdd size={20} />
            Add contact
          </PrimaryButton>
        </Form>
      </Formik>

      <AddContactSuccessModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};
