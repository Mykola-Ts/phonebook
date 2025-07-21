import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  min-width: 140px;
  border: 2px solid var(--blue-color);
  border-radius: 18px;
  padding: 8px 16px;

  color: var(--blue-color);
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--white-color);
    background-color: var(--blue-color);
  }

  &.user-btn {
    justify-content: start;

    width: 100%;
    min-width: 0;
    max-width: 200px;
    border-radius: 32px;
    padding: 2px 8px 2px 4px;

    overflow: hidden;

    & p {
      max-width: 80%;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.centered-btn {
    margin: 0 auto;
  }

  &.cancel-primary-btn {
    color: var(--red-color);
    border-color: var(--red-color);
  }

  &:is(:hover, :focus, :active).cancel-primary-btn {
    color: var(--white-color);
    background-color: var(--red-color);
  }

  & svg {
    flex-shrink: 0;
  }

  &.contact-btn {
    min-width: 100px;
    border: 1px solid currentColor;
    padding: 4px 8px;

    color: currentColor;

    &:is(:hover, :focus, :active) {
      color: var(--blue-color);
      background-color: transparent;
    }

    &:is(:hover, :focus, :active).delete-primary-btn {
      color: var(--red-color);
    }
  }
`;
