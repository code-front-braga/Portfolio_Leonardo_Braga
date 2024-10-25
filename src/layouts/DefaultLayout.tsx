import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './DefaultLayout';
import { Header } from '../components/Header/Header.tsx';

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </>
  );
}
