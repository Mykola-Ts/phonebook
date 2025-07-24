import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  transform: scale(1);

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 50px;
  padding: 0;

  background-color: transparent;

  transition: transform var(--transition-duration)
      var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    transform: scale(1.15);

    color: var(--blue-color);
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 439px) {
    flex-direction: column;
    gap: 12px;

    width: fit-content;
    margin: 0 auto;

    & button {
      width: 100%;
    }
  }
`;

export const ModalText = styled.p`
  margin-bottom: 24px;

  text-align: center;
  font-size: 18px;
`;
