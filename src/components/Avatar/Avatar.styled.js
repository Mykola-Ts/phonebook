import styled from 'styled-components';

export const AvatarWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 60px;
  height: 60px;
  border: 1px solid var(--gray-color);
  border-radius: 50%;

  box-shadow: var(--box-shadow);
`;

export const AvatarAlt = styled.span`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.2px;

  color: currentColor;
`;
