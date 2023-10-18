import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const FilterLabel = styled.label`
  display: block;

  margin-bottom: 28px;
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const FilterInput = styled.input`
  display: block;

  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--text-black-color);
  padding: 8px 32px;
  margin-top: 8px;

  outline: 2px solid transparent;

  transition: border-color var(--transition-duration)
      var(--transition-timing-function),
    outline-color var(--transition-duration) var(--transition-timing-function);

  &:focus {
    border-color: transparent;
    outline-color: var(--blue-color);
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

export const ResetBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  width: 16px;
  height: 16px;
  padding: 0;
  border: none;

  color: var(--black-color);
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    color: var(--blue-color);
  }
`;
