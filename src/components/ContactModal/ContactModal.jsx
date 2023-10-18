import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { ErrorMessage, Form, Formik } from 'formik';
import { BiSave } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { editContact } from 'redux/operations';
import { contactSchema } from 'components/Forms/AddContactForm';
import { CloseBtn } from './ContactModal.styled';
import {
  Error,
  Label,
  NameInputIcon,
  NumberInputIcon,
  StyledInput,
  SubmitButton,
  WrapperInput,
} from 'components/Forms/Form.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '600px',
    marginRight: '-50%',
  },
};

export const ContactModal = ({ contact, closeModal, modalIsOpen }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const onSubmit = values => {
    dispatch(
      editContact({
        id,
        editedContact: values,
      })
    );

    closeModal();
  };

  const onClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Contact Modal"
    >
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

          <SubmitButton type="submit">
            <BiSave size={20} />
            Save changes
          </SubmitButton>
        </Form>
      </Formik>
      <CloseBtn onClick={onClose}>
        <AiOutlineClose />
      </CloseBtn>
    </Modal>
  );
};
