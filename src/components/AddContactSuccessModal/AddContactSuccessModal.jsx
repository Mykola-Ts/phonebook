import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ModalWindow } from 'components/ContactModal/ModalWindow';
import { ButtonsWrap, ModalText } from './AddContactSuccessModal.styled';
import { ModalButton } from 'components/ContactModal/ModalWindow.styled';

export const AddContactSuccessModal = ({ modalIsOpen, closeModal }) => {
  const navigate = useNavigate();

  return (
    <ModalWindow closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <ModalText>✅ The contact was added successfully!</ModalText>

      <ButtonsWrap>
        <ModalButton type="button" onClick={() => closeModal()}>
          Stay on this page
        </ModalButton>
        <ModalButton
          type="button"
          onClick={() => {
            navigate('/contacts');
          }}
        >
          Go to Contacts
        </ModalButton>
      </ButtonsWrap>
    </ModalWindow>
  );
};

AddContactSuccessModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
