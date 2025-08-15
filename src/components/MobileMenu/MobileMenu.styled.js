import styled from 'styled-components';

export const MobileMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100vw;
  height: 100vh;
  padding: 72px 15px;

  background-color: var(--white-color);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
