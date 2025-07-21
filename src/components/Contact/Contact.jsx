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
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
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

export const Contact = ({ contact = {} }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onDelete = (id, name) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(resp => {
        toast.remove();
        toast.success(`${name} deleted from contacts`);
      })
      .catch(error => {
        toast.remove();
        toast.error(defaultErrorText);
      });
  };

  const toggleModal = () => {
    modalIsOpen
      ? (document.body.style.overflow = '')
      : (document.body.style.overflow = 'hidden');

    setModalIsOpen(!modalIsOpen);
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
            onClick={toggleModal}
          >
            <MdOutlineEdit size={20} />
            Edit
          </PrimaryButton>

          <PrimaryButton
            type="button"
            className="contact-btn delete-primary-btn"
            onClick={() => onDelete(id, name)}
          >
            <GoTrash size={20} />
            Delete
          </PrimaryButton>
        </BtnsWrapp>
      </ContactWrapp>

      <ModalWindow closeModal={toggleModal} modalIsOpen={modalIsOpen}>
        <Title>Edit contact</Title>
        <EditContactForm contact={contact} closeModal={toggleModal} />
      </ModalWindow>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
