import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { CloseBtn } from './ModalWindow.styled';

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 'calc(100% - 30px)',
    maxWidth: '600px',
    minHeight: '160px',
    marginRight: '-50%',
  },
};

export const ModalWindow = ({ children, closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Contact Modal"
    >
      {children}

      <CloseBtn onClick={closeModal}>
        <AiOutlineClose />
      </CloseBtn>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};
