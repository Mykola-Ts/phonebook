import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: 1px solid transparent;
  border-radius: 50px;

  background-color: transparent;

  transition: color var(--transition-duration)
  var(--transition-timing-function);

    &:is(:hover, :focus, :active) {
  color: var(--blue-color);
`;
