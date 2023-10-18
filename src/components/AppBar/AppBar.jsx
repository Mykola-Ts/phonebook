import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavHeader, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavHeader>
      <Wrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </NavHeader>
  );
};
