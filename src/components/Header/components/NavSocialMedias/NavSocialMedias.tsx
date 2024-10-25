import { Link } from 'react-router-dom';
import { NavSocialMediasContainer } from './NavSocialMedias';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export function NavSocialMedias() {
  return (
    <NavSocialMediasContainer>
      <Link to='https://github.com/code-front-braga' className='github'>
        <GithubLogo size={28} weight='fill' />
      </Link>
      <Link to='https://www.linkedin.com/in/leonardo-braga-8b7856216/' className='linkedin'>
        <LinkedinLogo size={28} weight='fill' />
      </Link>
    </NavSocialMediasContainer>
  );
}
