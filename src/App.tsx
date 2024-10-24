import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';

/*Sections import */
import { AboutMeSection } from './sections/AboutMe/About-Me.tsx';
import { ContactSection } from './sections/Contact/Contact.tsx';
import { HomeSection } from './sections/Home/Home.tsx';
import { ProjectsSection } from './sections/Projects/Projects.tsx';
import { SkillsSection } from './sections/Skills/Skills.tsx';

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </ThemeProvider>
  );
}
