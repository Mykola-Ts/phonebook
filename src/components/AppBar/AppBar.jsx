import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { MobileMenuBtn, NavHeader, Wrapper } from './AppBar.styled';

const body = document.body;

export const AppBar = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
  const { isLoggedIn } = useAuth();

  const onToggleMobileMenu = () => {
    body.style.overflow = !isOpenMobMenu ? 'hidden' : '';
    setIsOpenMobMenu(prev => !prev);
  };

  const onCloseMobileMenu = () => {
    if (!isOpenMobMenu) return;

    setIsOpenMobMenu(false);
    body.style.overflow = '';
  };

  return (
    <>
      <NavHeader>
        <Wrapper>
          <Navigation onCloseMobileMenu={onCloseMobileMenu} />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}

          {isLoggedIn && (
            <MobileMenuBtn
              type="button"
              aria-label="Toggle mobile menu"
              onClick={onToggleMobileMenu}
            >
              {isOpenMobMenu ? (
                <AiOutlineClose size={28} strokeWidth={0.5} />
              ) : (
                <RxHamburgerMenu size={28} strokeWidth={0.5} />
              )}
            </MobileMenuBtn>
          )}
        </Wrapper>
      </NavHeader>

      {isOpenMobMenu && <MobileMenu onCloseMobileMenu={onCloseMobileMenu} />}
    </>
  );
};
