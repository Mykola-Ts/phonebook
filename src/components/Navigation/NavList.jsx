import PropTypes from 'prop-types';
import { useAuth } from 'hooks/useAuth';
import { NavListStyled, StyledLink } from './Navigation.styled';

export const NavList = ({ isMobileMenu = false, onCloseMobileMenu }) => {
  const { isLoggedIn } = useAuth();

  const onClickNavLink = () => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu(false);
    }
  };

  return (
    <NavListStyled $isMobileMenu={Boolean(isMobileMenu)}>
      {isLoggedIn && (
        <StyledLink to="/" onClick={onClickNavLink}>
          Home
        </StyledLink>
      )}
      {isLoggedIn && (
        <StyledLink to="/contacts" onClick={onClickNavLink}>
          Contacts
        </StyledLink>
      )}
    </NavListStyled>
  );
};

NavList.propTypes = {
  isMobileMenu: PropTypes.bool,
  onCloseMobileMenu: PropTypes.func,
};
