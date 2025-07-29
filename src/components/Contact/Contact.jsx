import PropTypes from 'prop-types';
import { lazy, Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { GoTrash } from 'react-icons/go';
import { MdOutlineEdit } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from 'redux/contacts/operations';
import { defaultErrorText, linearGradients } from 'helpers/helpers';
import { EditContactForm } from 'components/Forms/EditContactForm';
import { Loader } from 'components/Loader/Loader';
import {
  ContactInfo,
  ContactNumber,
  ContactName,
  AvatarWrapp,
  BtnsWrapp,
  PhoneLink,
  ContactWrapp,
  AvatarAlt,
} from './Contact.styled';
import { Title } from 'components/Section/Section.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const ModalWindow = lazy(() => import('../ModalWindows/ModalWindow'));
const DeleteModalWindow = lazy(() =>
  import('../ModalWindows/DeleteModalWindow')
);

const body = document.body;
const modalVariants = {
  editContact: 'edit',
  deleteContact: 'delete',
};

export const Contact = ({ contact = {}, ordinalNumber = 0 }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (shouldOpen, variant) => {
    shouldOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = '');

    if (variant === modalVariants.editContact) {
      setEditModalIsOpen(shouldOpen);
    } else if (variant === modalVariants.deleteContact) {
      setDeleteModalIsOpen(shouldOpen);
    }
  };

  const onDelete = (id, name) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(resp => {
        toast.remove();
        toast.success(`${name} deleted from contacts`);

        toggleModal(false, modalVariants.deleteContact);
      })
      .catch(error => {
        toast.remove();
        toast.error(defaultErrorText);
      });
  };

  const { id, name, number } = contact;
  const numberHref = number.split('-').join('').split(' ').join('');
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1] || '';
  const backgroundGradient =
    linearGradients[ordinalNumber % linearGradients.length];

  return (
    <>
      <AvatarWrapp style={true ? { background: backgroundGradient } : {}}>
        <AvatarAlt>
          {firstName.split('')[0].toUpperCase()}
          {lastName && lastName.split('')[0].toUpperCase()}
        </AvatarAlt>
      </AvatarWrapp>

      <ContactInfo>
        <ContactName>{`${name} `}</ContactName>
        <ContactNumber href={`tel:${numberHref}`}>{number}</ContactNumber>
      </ContactInfo>

      <ContactWrapp>
        <PhoneLink
          href={`tel:${numberHref}`}
          aria-label={`Call the number ${numberHref}`}
        >
          <BsFillTelephoneFill />
        </PhoneLink>

        <BtnsWrapp>
          <PrimaryButton
            type="button"
            className="contact-btn"
            onClick={() => toggleModal(true, modalVariants.editContact)}
          >
            <MdOutlineEdit size={20} />
            Edit
          </PrimaryButton>

          <PrimaryButton
            type="button"
            className="contact-btn delete-primary-btn"
            onClick={() => toggleModal(true, modalVariants.deleteContact)}
          >
            <GoTrash size={20} />
            Delete
          </PrimaryButton>
        </BtnsWrapp>
      </ContactWrapp>

      <Suspense fallback={<Loader />}>
        <ModalWindow
          closeModal={() => toggleModal(false, modalVariants.editContact)}
          modalIsOpen={editModalIsOpen}
        >
          <Title>Edit contact</Title>
          <EditContactForm
            contact={contact}
            closeModal={() => toggleModal(false, modalVariants.editContact)}
          />
        </ModalWindow>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <DeleteModalWindow
          title="Delete contact"
          modalText={
            <>
              Are you sure you want to delete the contact{' '}
              <strong>{name}</strong>?
            </>
          }
          isOpen={deleteModalIsOpen}
          closeModal={() => toggleModal(false, modalVariants.deleteContact)}
          onDelete={() => onDelete(id, name)}
        />
      </Suspense>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  ordinalNumber: PropTypes.number.isRequired,
};
