import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import ModalWindow from './ModalWindow';
import { ButtonsWrap, ModalText } from './ModalWindow.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';
import { Title } from 'components/Section/Section.styled';

const LogoutModalWindow = ({ isOpen, closeModal, onLogout }) => {
  return (
    <ModalWindow closeModal={closeModal} modalIsOpen={isOpen}>
      <Title>Log Out</Title>
      <ModalText>Are you sure you want to log out?</ModalText>

      <ButtonsWrap>
        <PrimaryButton type="button" onClick={closeModal}>
          <AiOutlineClose size={20} />
          Cancel
        </PrimaryButton>

        <PrimaryButton
          type="button"
          className="delete-primary-btn"
          onClick={onLogout}
        >
          <CiLogout size={20} strokeWidth={1} />
          Log Out
        </PrimaryButton>
      </ButtonsWrap>
    </ModalWindow>
  );
};

LogoutModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutModalWindow;
