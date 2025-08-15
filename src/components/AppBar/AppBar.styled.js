import styled from 'styled-components';

export const NavHeader = styled.header`
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 48px;
  border-radius: 0 0 8px 8px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 768px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const MobileMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 0;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
