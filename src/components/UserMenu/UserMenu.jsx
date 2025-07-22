import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { BiSolidDownArrow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAuth } from 'hooks/useAuth';
import { useClickOutside } from 'hooks/useClickOutside';
import { userLogOut } from 'redux/auth/operations';
import { Wrapper, UserName, LogoutBtn } from './UserMenu.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

export const UserMenu = () => {
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);

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
        <LogoutBtn
          type="button"
          ref={logoutBtnRef}
          onClick={() => dispatch(userLogOut())}
        >
          Log Out <AiOutlineArrowRight />
        </LogoutBtn>
      )}
    </Wrapper>
  );
};
