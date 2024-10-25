import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  gap: 1.8rem;
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) => `
    position: relative;
    font-family: ${theme.font.paragraph};
    font-size: ${theme.font.size.medium};
    letter-spacing: 0.1rem;

    color: ${theme.color.contrastText};

    transition: 0.4s ease-in;

    &.active {
      color: ${theme.color.primary.contrastText};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -0.2rem;
      width: 0rem;
      left: 0;
      right: 0;
      height: 2px;
      border-radius: 5px;
      transition: width 0.2s ease-in;
    }

    &:hover::before {
      width: 100%;
      background: ${theme.color.contrastText};
    }
  `}
`;
