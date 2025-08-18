import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { GoTrash } from 'react-icons/go';
import { useClickOutside } from 'hooks/useClickOutside';
import { usePortalPosition } from 'hooks/usePortalPosition';
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
  const optionsMenuBtnRef = useRef(null);
  const optionsMenuRef = useRef(null);

  const position = usePortalPosition(optionsMenuBtnRef, isOptionsMenuOpen);

  useClickOutside(isOptionsMenuOpen, optionsMenuRef, target => {
    if (
      optionsMenuBtnRef.current &&
      !optionsMenuBtnRef.current.contains(target)
    ) {
      setIsOptionsMenuOpen(false);
    }
  });

  return (
    <ContactOptionsWrap>
      <ContactOptionsBtn
        type="button"
        aria-label="Options"
        ref={optionsMenuBtnRef}
        onClick={() => setIsOptionsMenuOpen(prev => !prev)}
      >
        <SlOptionsVertical size={20} />
      </ContactOptionsBtn>

      {isOptionsMenuOpen &&
        createPortal(
          <ContactOptionsMenu
            ref={optionsMenuRef}
            style={{
              top: `${position.top - 26}px`,
              left: `${position.left}px`,
            }}
          >
            <ContactOptionsMenuItem key="Call">
              <ContactOptionsMenuLink
                href={`tel:${numberHref}`}
                className="calling-btn"
                onClick={() => setIsOptionsMenuOpen(false)}
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
          </ContactOptionsMenu>,
          document.querySelector('#modal-root')
        )}
    </ContactOptionsWrap>
  );
};

ContactOptions.propTypes = {
  numberHref: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
