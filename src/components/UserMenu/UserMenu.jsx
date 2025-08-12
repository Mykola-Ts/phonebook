import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { BiSolidDownArrow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAuth } from 'hooks/useAuth';
import { useClickOutside } from 'hooks/useClickOutside';
import { userLogOut } from 'redux/auth/operations';
import LogoutModalWindow from 'components/ModalWindows/LogoutModalWindow';
import { Wrapper, UserName, LogoutBtn } from './UserMenu.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const body = document.body;

export const UserMenu = () => {
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const logoutBtnRef = useRef(null);
  const { user } = useAuth();

  useClickOutside(isShowLogoutBtn, logoutBtnRef, () =>
    setIsShowLogoutBtn(false)
  );

  const toggleLogoutBtn = () => {
    toast.remove();
    setIsShowLogoutBtn(prev => !prev);
  };

  const onClickLogoutBtn = () => {
    setIsShowLogoutBtn(false);
    setIsModalOpen(true);
    body.style.overflow = 'hidden';
  };

  const onLogoutUser = () => {
    closeModal();
    dispatch(userLogOut());
  };

  const closeModal = () => {
    setIsModalOpen(false);
    body.style.overflow = '';
  };

  return (
    <Wrapper>
      <PrimaryButton
        type="button"
        className="user-btn"
        onClick={toggleLogoutBtn}
      >
        <BiUserCircle size={32} />
        <UserName>{user.name}</UserName>
        <BiSolidDownArrow size={12} />
      </PrimaryButton>

      {isShowLogoutBtn && (
        <LogoutBtn type="button" ref={logoutBtnRef} onClick={onClickLogoutBtn}>
          Log Out <AiOutlineArrowRight />
        </LogoutBtn>
      )}

      <LogoutModalWindow
        isOpen={isModalOpen}
        closeModal={closeModal}
        onLogout={onLogoutUser}
      />
    </Wrapper>
  );
};
