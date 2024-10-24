import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './DefaultLayout';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
