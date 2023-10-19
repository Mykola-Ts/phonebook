import styled from 'styled-components';

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 8px;

  margin-right: auto;

  @media screen and (max-width: 767px) {
    justify-content: center;

    width: 100%;
    margin-bottom: 16px;

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

  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }
`;

export const ContactName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.36px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const ContactNumber = styled.span`
  font-weight: 400;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 100px;
  border-radius: 18px;
  border: 1px solid var(--text-black-color);
  padding: 8px 12px;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: var(--red-color);
    border-color: var(--red-color);
  }

  &:not(:last-child) {
    margin-right: 12px;
  }
`;
