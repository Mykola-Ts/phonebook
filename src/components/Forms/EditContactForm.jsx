import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import { BiSave } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useContacts } from 'hooks/useContacts';
import {
  contactSchema,
  defaultErrorText,
  isIncludesContact,
} from 'helpers/helpers';
import { editContact } from 'redux/contacts/operations';
import {
  ButtonsWrap,
  Error,
  Label,
  NameInputIcon,
  NumberInputIcon,
  StyledInput,
  WrapperInput,
} from './Form.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

export const EditContactForm = ({ contact, closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const { id, name, number } = contact;

  const onSubmit = values => {
    const allContactsExceptEdited = contacts.filter(
      contact => contact.name !== name && contact.number !== number
    );

    if (
      isIncludesContact(allContactsExceptEdited, values.name, values.number)
    ) {
      return;
    }

    dispatch(
      editContact({
        id,
        editedContact: values,
      })
    )
      .unwrap()
      .then(resp => {
        toast.remove();
        toast.success(`Contact ${name} successfully changed.`);
      })
      .catch(error => {
        toast.remove();
        toast.error(defaultErrorText);
      });

    closeModal();
  };

  return (
    <Formik
      initialValues={{ name, number }}
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
            />
            <NameInputIcon size={18} />
          </WrapperInput>
          <ErrorMessage name="name" component={Error} />
        </Label>

        <Label>
          Number
          <WrapperInput>
            <StyledInput type="tel" name="number" placeholder="000-00-00" />
            <NumberInputIcon />
          </WrapperInput>
          <ErrorMessage name="number" component={Error} />
        </Label>

        <ButtonsWrap>
          <PrimaryButton
            type="button"
            className="cancel-primary-btn"
            onClick={() => closeModal()}
          >
            <AiOutlineClose size={20} />
            Cancel changes
          </PrimaryButton>
          <PrimaryButton type="submit">
            <BiSave size={20} />
            Save changes
          </PrimaryButton>
        </ButtonsWrap>
      </Form>
    </Formik>
  );
};

EditContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
