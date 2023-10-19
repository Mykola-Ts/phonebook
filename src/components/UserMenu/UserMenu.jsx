import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { BiSolidDownArrow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAuth } from 'hooks/useAuth';
import { userLogOut } from 'redux/auth/operations';
import { Wrapper, UserBtn, UserName, LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const [isShowLogoutBtn, setIsShowLogoutBtn] = useState(false);

  const dispatch = useDispatch();
  const { user } = useAuth();

  const toggleLogoutBtn = () => {
    toast.remove();

    setIsShowLogoutBtn(!isShowLogoutBtn);
  };

  return (
    <Wrapper>
      <UserBtn type="button" onClick={toggleLogoutBtn}>
        <BiUserCircle size={32} />
        <UserName>{user.name}</UserName>
        <BiSolidDownArrow size={12} />
      </UserBtn>

      {isShowLogoutBtn && (
        <LogoutBtn type="button" onClick={() => dispatch(userLogOut())}>
          Log Out <AiOutlineArrowRight />
        </LogoutBtn>
      )}
    </Wrapper>
  );
};
