import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 768px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 25px;
  margin-right: 32px;

  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;

  color: currentColor;
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
