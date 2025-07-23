import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { GoTrash } from 'react-icons/go';
import { ModalWindow } from './ModalWindow';
import { ButtonsWrap, ModalText } from './ModalWindow.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';
import { Title } from 'components/Section/Section.styled';

export const DeleteModalWindow = ({
  title,
  modalText,
  isOpen,
  closeModal,
  onDelete,
}) => {
  return (
    <ModalWindow closeModal={closeModal} modalIsOpen={isOpen}>
      {title && <Title>{title}</Title>}
      <ModalText>{modalText}</ModalText>

      <ButtonsWrap>
        <PrimaryButton type="button" onClick={closeModal}>
          <AiOutlineClose size={20} />
          Cancel
        </PrimaryButton>

        <PrimaryButton
          type="button"
          className="cancel-primary-btn"
          onClick={onDelete}
        >
          <GoTrash size={20} />
          Delete
        </PrimaryButton>
      </ButtonsWrap>
    </ModalWindow>
  );
};

DeleteModalWindow.propTypes = {
  title: PropTypes.string,
  modalText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
