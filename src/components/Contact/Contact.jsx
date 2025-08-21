import PropTypes from 'prop-types';
import { lazy, Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { GoTrash } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { deleteContact } from 'redux/contacts/operations';
import { defaultErrorText } from 'helpers/helpers';
import { EditContactForm } from 'components/Forms/EditContactForm';
import { ContactOptions } from 'components/ContactOptions/ContactOptions';
import { Loader } from 'components/Loader/Loader';
import {
  ContactInfo,
  ContactNumber,
  ContactName,
  PhoneLink,
  ContactWrapp,
  BtnsWrapp,
  ShowMoreBtn,
} from './Contact.styled';
import { Title } from 'components/Section/Section.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';
import { Avatar } from 'components/Avatar/Avatar';

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
  const [isShowMore, setIsShowMore] = useState(false);
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

  return (
    <>
      <ContactWrapp>
        <Avatar name={name} ordinalNumber={ordinalNumber} />

        <ContactInfo $expanded={Boolean(isShowMore)}>
          <ContactName
            $expanded={Boolean(isShowMore)}
            className="js-contact-name"
          >{`${name} `}</ContactName>
          <ContactNumber href={`tel:${numberHref}`}>{number}</ContactNumber>
        </ContactInfo>

        {!isShowMore && (
          <PhoneLink
            href={`tel:${numberHref}`}
            aria-label={`Call the number ${numberHref}`}
          >
            <BsFillTelephoneFill />
          </PhoneLink>
        )}
      </ContactWrapp>

      <ContactOptions
        numberHref={numberHref}
        onClickEdit={() => toggleModal(true, modalVariants.editContact)}
        onClickDelete={() => toggleModal(true, modalVariants.deleteContact)}
      />

      <ShowMoreBtn
        type="button"
        aria-label="Toggle show more"
        onClick={() => setIsShowMore(prev => !prev)}
      >
        {isShowMore ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
      </ShowMoreBtn>

      {isShowMore && (
        <BtnsWrapp>
          <PrimaryButton
            as="a"
            href={`tel:${numberHref}`}
            className="contact-btn call-link"
          >
            <BsFillTelephoneFill size={16} /> Call
          </PrimaryButton>

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
      )}

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
