import { HeaderContainer, HeaderMain, LogoContainer } from './Header';
import { NavPages } from './components/NavPages/NavPages.tsx';
import { NavSocialMedias } from './components/NavSocialMedias/NavSocialMedias.tsx';

export function Header() {
  return (
    <HeaderMain>
      <HeaderContainer>
        <LogoContainer>
          <span>Developed by</span>
          <img src='/my_logo.svg' alt='Logo do criador do site: {lb.};' style={{ width: '4.6rem' }} />
        </LogoContainer>
        <NavPages />
        <NavSocialMedias />
      </HeaderContainer>
    </HeaderMain>
  );
}
