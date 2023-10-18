import logoImg from '../../img/logo.png';
import { useAuth } from 'hooks/useAuth';
import { Logo, NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavList>
      <Logo to="/">
        <img src={logoImg} alt="Logo" width={28} /> Phonebook
      </Logo>
      {isLoggedIn && <StyledLink to="/">Home</StyledLink>}
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavList>
  );
};
