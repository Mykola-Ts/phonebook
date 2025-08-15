import styled from 'styled-components';

export const ContactWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  max-width: 100%;

  @media screen and (max-width: 767px) {
    gap: 12px;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;

  margin-right: auto;

  overflow: ${({ $expanded }) => ($expanded ? 'visible' : 'hidden')};
  overflow-wrap: ${({ $expanded }) => ($expanded ? 'break-word' : 'normal')};
  word-break: ${({ $expanded }) => ($expanded ? 'break-word' : 'normal')};

  @media screen and (max-width: 767px) {
    justify-content: center;

    width: 100%;
  }

  @media screen and (max-width: 380px) {
    align-items: center;
  }
`;

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
`;

export const ContactName = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 4 : 2)};
  -webkit-box-orient: vertical;

  width: fit-content;
  max-width: ${({ $expanded }) => ($expanded ? 'none' : '100%')};

  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.36px;

  @media screen and (max-width: 380px) {
    text-align: center;
  }
`;

export const ContactNumber = styled.a`
  width: fit-content;
  max-width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  text-decoration: none;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border: 1px solid var(--success-color);
  border-radius: 50%;
  padding: 8px;

  color: var(--success-color);
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--white-color);
    background-color: var(--success-color);
  }
`;

export const BtnsWrapp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ShowMoreBtn = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(1);

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;

  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  color: currentColor;
  background-color: transparent;

  transition: transform var(--transition-duration)
      var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    transform: scale(1.1);

    color: var(--blue-color);
  }
`;
