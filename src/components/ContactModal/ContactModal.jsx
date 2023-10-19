import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { EditContactForm } from 'components/Forms/EditContactForm';
import { CloseBtn } from './ContactModal.styled';

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 30px)',
    maxWidth: '600px',
    marginRight: '-50%',
  },
};

export const ContactModal = ({ contact, closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Contact Modal"
    >
      <EditContactForm contact={contact} closeModal={closeModal} />

      <CloseBtn onClick={closeModal}>
        <AiOutlineClose />
      </CloseBtn>
    </Modal>
  );
};

ContactModal.propTypes = {
  contact: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};
