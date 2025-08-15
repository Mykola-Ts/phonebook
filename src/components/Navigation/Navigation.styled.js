import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NavListStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 768px;

  @media screen and (max-width: 767px) {
    display: ${({ $isMobileMenu }) => ($isMobileMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 8px;

    height: 100%;

    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;

    & a {
      padding: 8px;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  height: 25px;

  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;

  color: currentColor;
`;

export const LogoText = styled.p`
  @media screen and (max-width: 319px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;

  padding: 16px 4px;

  text-decoration: none;
  font-weight: 700;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    color: var(--blue-color);
  }
`;
