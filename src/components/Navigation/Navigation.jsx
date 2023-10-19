import { useAuth } from 'hooks/useAuth';
import { Logo, LogoText, Nav, NavList, StyledLink } from './Navigation.styled';
import logoImg from '../../img/logo.png';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Logo to="/">
        <img src={logoImg} alt="Logo" width={28} />
        <LogoText>Phonebook</LogoText>
      </Logo>
      <NavList>
        {isLoggedIn && <StyledLink to="/">Home</StyledLink>}
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </NavList>
    </Nav>
  );
};
