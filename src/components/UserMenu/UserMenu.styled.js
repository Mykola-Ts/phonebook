import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  position: relative;

  min-width: 120px;
  width: fit-content;

  @media screen and (max-width: 767px) {
    display: ${({ $isMobileMenu }) => ($isMobileMenu ? 'block' : 'none')};

    margin-bottom: 30%;
  }
`;

export const UserName = styled.p`
  margin-right: auto;

  font-weight: 700;
`;

export const LogoutBtn = styled.button`
  position: absolute;
  bottom: -100%;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: 2px solid var(--text-black-color);
  border-radius: 12px;
  padding: 8px 16px;
  margin: 0 auto;

  background-color: rgba(255, 255, 255, 0.7);

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--red-color);
    background-color: var(--white-color);
    border-color: var(--red-color);
  }
`;
