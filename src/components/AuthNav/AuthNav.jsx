import { NavList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </NavList>
  );
};
