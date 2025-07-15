import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  min-width: 120px;
`;

export const UserBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  border-radius: 32px;
  border: 2px solid var(--blue-color);
  padding: 2px 8px 2px 4px;

  color: var(--blue-color);
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus) {
    color: var(--white-color);
    background-color: var(--blue-color);
  }
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const LogoutBtn = styled.button`
  position: absolute;
  bottom: -100%;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--text-black-color);
  padding: 8px 16px;
  margin: 0 auto;

  background-color: rgba(255, 255, 255, 0.7);

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    background-color: var(--white-color);
  }
`;
