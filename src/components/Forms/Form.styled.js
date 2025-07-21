import styled from 'styled-components';
import { Field } from 'formik';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';

export const Label = styled.label`
  display: block;

  margin-bottom: 28px;

  font-weight: 700;

  cursor: pointer;
`;

export const WrapperInput = styled.div`
  position: relative;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:has(input:focus) {
    color: var(--blue-color);
  }
`;

export const StyledInput = styled(Field)`
  display: block;

  width: 100%;
  border: 1px solid var(--text-black-color);
  border-radius: 8px;
  padding: 8px 16px 8px 32px;
  margin-top: 8px;

  outline: 2px solid transparent;

  transition: border-color var(--transition-duration)
      var(--transition-timing-function),
    outline-color var(--transition-duration) var(--transition-timing-function);

  &:focus {
    border-color: transparent;
    outline-color: var(--blue-color);
  }

  & + svg {
    cursor: text;
  }
`;

export const NameInputIcon = styled(AiOutlineUser)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

export const EmailInputIcon = styled(AiOutlineMail)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

export const PasswordInputIcon = styled(RiLockPasswordLine)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

export const NumberInputIcon = styled(BsTelephone)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

export const Error = styled.p`
  padding: 4px;

  font-weight: 500;

  color: var(--error-color);
`;
