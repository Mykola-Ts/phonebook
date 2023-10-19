import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from 'helpers/helpers';
import { GlobalStyle } from 'components/GlobalStyle';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      
      <Wrapper>
        <Suspense fallback={<Loader text="Loading data, please wait..." />}>
          <Outlet />
        </Suspense>
      </Wrapper>

      <GlobalStyle />
      <Toaster
        position="top-right"
        toastOptions={toastOptions}
        containerStyle={{ top: 52 }}
      />
    </>
  );
};
