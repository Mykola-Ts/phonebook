import PropTypes from 'prop-types';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavList } from 'components/Navigation/NavList';
import { MobileMenuWrap } from './MobileMenu.styled';

export const MobileMenu = ({ onCloseMobileMenu }) => {
  return (
    <MobileMenuWrap>
      <UserMenu isMobileMenu={true} onCloseMobileMenu={onCloseMobileMenu} />
      <NavList isMobileMenu={true} onCloseMobileMenu={onCloseMobileMenu} />
    </MobileMenuWrap>
  );
};

MobileMenu.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};
