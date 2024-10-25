import { router } from '../../../../Router';
import { NavContainer, StyledNavLink } from './NavPages';

import { IRoute } from '../../../../interfaces/interfaces';

export function NavPages() {
  const routes = (router.routes[0].children as unknown as IRoute[]) || [];

  return (
    <NavContainer>
      {routes.map(route => (
        <StyledNavLink key={route.path} to={`/${route.path}`} className={({ isActive }) => (isActive ? 'active' : '')}>
          {/* Pega a primeira letra do nome do path da página, transforma em maiúscula e as demais letras em minúscula */}
          {route.path.charAt(0).toUpperCase() + route.path.slice(1)}
        </StyledNavLink>
      ))}
    </NavContainer>
  );
}
