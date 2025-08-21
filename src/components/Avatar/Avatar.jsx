import PropTypes from 'prop-types';
import { linearGradients } from 'helpers/helpers';
import { AvatarAlt, AvatarWrapp } from './Avatar.styled';

export const Avatar = ({ name = '', ordinalNumber = 0 }) => {
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1] || '';
  const backgroundGradient =
    linearGradients[ordinalNumber % linearGradients.length];

  return (
    <AvatarWrapp style={{ background: backgroundGradient }}>
      <AvatarAlt>
        {firstName.split('')[0].toUpperCase()}
        {lastName && lastName.split('')[0].toUpperCase()}
      </AvatarAlt>
    </AvatarWrapp>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  ordinalNumber: PropTypes.number,
};
