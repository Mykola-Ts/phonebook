import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
