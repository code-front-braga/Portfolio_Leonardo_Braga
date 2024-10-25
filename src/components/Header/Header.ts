import styled from 'styled-components';

export const HeaderMain = styled.header`
  position: fixed;
  width: 100%;

  padding: 0.8rem;

  z-index: 10;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-family: ${props => props.theme.font.subtitle};
    font-size: ${props => props.theme.font.size.small};
    color: ${props => props.theme.color.contrastText};
    font-weight: bolder;
  }
`;
