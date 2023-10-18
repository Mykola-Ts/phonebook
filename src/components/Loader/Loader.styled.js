import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 12px;

  background-color: rgba(228, 228, 228, 0.4);
`;

export const Text = styled.p`
  text-align: center;
`;
