import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { ToggleShowPasswordBtn } from './ShowPasswordBtn.styled';

export const ShowPasswordBtn = ({ inputRef }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onToggleShowPassword = () => {
    if (!inputRef) return;

    const input = inputRef.current;

    input.type = input.type === 'password' ? 'text' : 'password';

    setIsShowPassword(prev => !prev);
  };

  return (
    <ToggleShowPasswordBtn type="button" onClick={onToggleShowPassword}>
      {isShowPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
    </ToggleShowPasswordBtn>
  );
};

ShowPasswordBtn.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
