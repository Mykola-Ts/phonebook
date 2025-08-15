import PropTypes from 'prop-types';
import logoImg from '../../img/logo.png';
import { NavList } from './NavList';
import { Logo, LogoText, Nav } from './Navigation.styled';

export const Navigation = ({ onCloseMobileMenu }) => {
  return (
    <Nav>
      <Logo to="/" onClick={onCloseMobileMenu}>
        <img src={logoImg} alt="Logo" width={28} />
        <LogoText>Phonebook</LogoText>
      </Logo>

      <NavList />
    </Nav>
  );
};

Navigation.propTypes = {
  setIsOpenMobMenu: PropTypes.func,
};
