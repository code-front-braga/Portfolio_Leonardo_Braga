import styled from 'styled-components';

export const NavSocialMediasContainer = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    svg {
      display: flex;

      fill: ${props => props.theme.color.contrastText};

      transition: 0.4s ease-in;
    }
  }

  a.github:hover svg {
    fill: ${props => props.theme.color.secondary.main};
  }

  a.linkedin:hover svg {
    fill: #0a66c2;
  }
`;
