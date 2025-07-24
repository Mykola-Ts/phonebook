import styled from 'styled-components';

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;

  margin-right: auto;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    justify-content: center;

    width: 100%;

    text-align: center;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.36px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactNumber = styled.a`
  font-weight: 400;
  text-decoration: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--blue-color);
  }
`;

export const ContactWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    gap: 12px;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
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
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
