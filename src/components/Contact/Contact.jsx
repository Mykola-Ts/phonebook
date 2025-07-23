import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import { GoTrash } from 'react-icons/go';
import { MdOutlineEdit } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from 'redux/contacts/operations';
import { defaultErrorText } from 'helpers/helpers';
import { EditContactForm } from 'components/Forms/EditContactForm';
import { ModalWindow } from 'components/ModalWindows/ModalWindow';
import { DeleteModalWindow } from 'components/ModalWindows/DeleteModalWindow';
import {
  ContactInfo,
  ContactNumber,
  ContactName,
  AvatarWrapp,
  BtnsWrapp,
  PhoneLink,
  ContactWrapp,
} from './Contact.styled';
import { Title } from 'components/Section/Section.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const body = document.body;
const modalVariants = {
  editContact: 'edit',
  deleteContact: 'delete',
};

export const Contact = ({ contact = {} }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (isOpen, variant) => {
    isOpen ? (body.style.overflow = '') : (body.style.overflow = 'hidden');

    if (variant === modalVariants.editContact) {
      setEditModalIsOpen(prev => !prev);
    } else if (variant === modalVariants.deleteContact) {
      setDeleteModalIsOpen(prev => !prev);
    }
  };

  const onDelete = (id, name) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(resp => {
        toast.remove();
        toast.success(`${name} deleted from contacts`);

        toggleModal(deleteModalIsOpen, modalVariants.deleteContact);
      })
      .catch(error => {
        toast.remove();
        toast.error(defaultErrorText);
      });
  };

  const { id, name, number } = contact;
  const numberHref = number.split('-').join('').split(' ').join('');

  return (
    <>
      <AvatarWrapp>
        <FaUserAlt size={32} color="gray" />
      </AvatarWrapp>

      <ContactInfo>
        <ContactName>{`${name}: `}</ContactName>
        <ContactNumber href={`tel:${numberHref}`}>{number}</ContactNumber>
      </ContactInfo>

      <ContactWrapp>
        <PhoneLink href={`tel:${numberHref}`}>
          <BsFillTelephoneFill />
        </PhoneLink>

        <BtnsWrapp>
          <PrimaryButton
            type="button"
            className="contact-btn"
            onClick={() =>
              toggleModal(editModalIsOpen, modalVariants.editContact)
            }
          >
            <MdOutlineEdit size={20} />
            Edit
          </PrimaryButton>

          <PrimaryButton
            type="button"
            className="contact-btn delete-primary-btn"
            onClick={() =>
              toggleModal(deleteModalIsOpen, modalVariants.deleteContact)
            }
          >
            <GoTrash size={20} />
            Delete
          </PrimaryButton>
        </BtnsWrapp>
      </ContactWrapp>

      <ModalWindow
        closeModal={() =>
          toggleModal(editModalIsOpen, modalVariants.editContact)
        }
        modalIsOpen={editModalIsOpen}
      >
        <Title>Edit contact</Title>
        <EditContactForm
          contact={contact}
          closeModal={() =>
            toggleModal(editModalIsOpen, modalVariants.editContact)
          }
        />
      </ModalWindow>

      <DeleteModalWindow
        title="Delete contact"
        modalText={
          <>
            Are you sure you want to delete the contact <strong>{name}</strong>?
          </>
        }
        isOpen={deleteModalIsOpen}
        closeModal={() =>
          toggleModal(deleteModalIsOpen, modalVariants.deleteContact)
        }
        onDelete={() => onDelete(id, name)}
      />
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
