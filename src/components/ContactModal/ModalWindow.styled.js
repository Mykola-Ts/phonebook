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

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
  }
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 100px;
  min-height: 40px;
  border-radius: 18px;
  border: 1px solid var(--text-black-color);
  padding: 4px 8px;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
    border-color: var(--blue-color);
  }
`;
