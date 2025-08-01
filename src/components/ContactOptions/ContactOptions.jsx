import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { GoTrash } from 'react-icons/go';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  ContactOptionsBtn,
  ContactOptionsMenu,
  ContactOptionsMenuBtn,
  ContactOptionsMenuItem,
  ContactOptionsMenuLink,
  ContactOptionsWrap,
} from './ContactOptions.styles';

export const ContactOptions = ({ numberHref, onClickEdit, onClickDelete }) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const optionsMenuRef = useRef(null);

  useClickOutside(isOptionsMenuOpen, optionsMenuRef, () =>
    setIsOptionsMenuOpen(false)
  );

  return (
    <ContactOptionsWrap>
      <ContactOptionsBtn
        type="button"
        onClick={() => setIsOptionsMenuOpen(prev => !prev)}
      >
        <SlOptionsVertical size={20} />
      </ContactOptionsBtn>

      {isOptionsMenuOpen && (
        <ContactOptionsMenu ref={optionsMenuRef}>
          <ContactOptionsMenuItem key="Call">
            <ContactOptionsMenuLink
              href={`tel:${numberHref}`}
              className="calling-btn"
              onClick={() => {
                setIsOptionsMenuOpen(false);
              }}
            >
              <BsFillTelephoneFill size={16} /> Call
            </ContactOptionsMenuLink>
          </ContactOptionsMenuItem>

          <ContactOptionsMenuItem key="Edit">
            <ContactOptionsMenuBtn
              type="button"
              onClick={() => {
                setIsOptionsMenuOpen(false);
                onClickEdit();
              }}
            >
              <MdOutlineEdit size={20} /> Edit
            </ContactOptionsMenuBtn>
          </ContactOptionsMenuItem>

          <ContactOptionsMenuItem key="Delete">
            <ContactOptionsMenuBtn
              type="button"
              className="delete-btn"
              onClick={() => {
                setIsOptionsMenuOpen(false);
                onClickDelete();
              }}
            >
              <GoTrash size={20} /> Delete
            </ContactOptionsMenuBtn>
          </ContactOptionsMenuItem>
        </ContactOptionsMenu>
      )}
    </ContactOptionsWrap>
  );
};

ContactOptions.propTypes = {
  numberHref: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
