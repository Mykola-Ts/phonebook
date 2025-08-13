import styled from 'styled-components';

export const ToggleShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  border: none;
  padding: 0;

  color: var(--text-black-color);
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
  }
`;
