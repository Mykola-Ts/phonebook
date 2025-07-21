import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import {
  ButtonsWrap,
  ModalText,
  SuccessIcon,
} from './AddContactSuccessModal.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

export const AddContactSuccessModal = ({ modalIsOpen, closeModal }) => {
  const navigate = useNavigate();

  return (
    <ModalWindow closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <SuccessIcon size={80} width={0.5} />

      <ModalText>The contact was added successfully!</ModalText>

      <ButtonsWrap>
        <PrimaryButton type="button" onClick={() => closeModal()}>
          Stay on this page
        </PrimaryButton>
        <PrimaryButton
          type="button"
          onClick={() => {
            navigate('/contacts');
          }}
        >
          Go to Contacts
        </PrimaryButton>
      </ButtonsWrap>
    </ModalWindow>
  );
};

AddContactSuccessModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
