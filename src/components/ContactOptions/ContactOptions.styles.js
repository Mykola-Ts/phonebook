import styled from 'styled-components';

export const ContactOptionsWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ContactOptionsBtn = styled.button`
  transform: scaleY(1);

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;

  width: 20px;
  height: 26px;
  border: none;
  padding: 0;

  color: currentColor;
  background-color: transparent;

  transition: transform var(--transition-duration)
      var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    transform: scaleY(1.1);

    color: var(--blue-color);
  }
`;

export const ContactOptionsMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 10;

  display: flex;
  flex-direction: column;

  min-width: 120px;
  border: 1px solid var(--text-black-color);
  border-radius: 8px;
  padding: 4px 0;

  background-color: var(--white-color);
`;

export const ContactOptionsMenuItem = styled.li`
  width: 100%;
`;

export const ContactOptionsMenuBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  border: 1px solid var(--gray-color);
  border-radius: 4px;
  padding: 4px 8px;

  color: currentColor;
  background-color: #ffffffb3;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
    background-color: var(--white-color);
  }

  &.calling-btn:is(:hover, :focus, :active) {
    color: var(--success-color);
  }

  &.delete-btn:is(:hover, :focus, :active) {
    color: var(--red-color);
  }
`;

export const ContactOptionsMenuLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  border: 1px solid var(--gray-color);
  border-radius: 4px;
  padding: 4px 8px;

  color: currentColor;
  background-color: #ffffffb3;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
    background-color: var(--white-color);
  }

  &.calling-btn:is(:hover, :focus, :active) {
    color: var(--success-color);
  }
`;
