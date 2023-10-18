import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.div`
  display: flex;
  gap: 16px;

  max-width: 768px;
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
