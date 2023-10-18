import styled from 'styled-components';

export const NavHeader = styled.header`
  width: 100%;
  border-radius: 0 0 8px 8px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 768px;
  padding: 0 15px;
  margin: 0 auto;
`;
