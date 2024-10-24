import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';

import { HomeSection } from './sections/Home/Home.tsx';
import { AboutMeSection } from './sections/AboutMe/About-Me.tsx';
import { SkillsSection } from './sections/Skills/Skills.tsx';
import { ProjectsSection } from './sections/Projects/Projects.tsx';
import { ContactSection } from './sections/Contact/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: 'my_portfolio/sections/Home', element: <HomeSection /> },
      { path: 'my_portfolio/sections/AboutMe', element: <AboutMeSection /> },
      { path: 'my_portfolio/sections/Skills', element: <SkillsSection /> },
      { path: 'my_portfolio/sections/Projects', element: <ProjectsSection /> },
      { path: 'my_portfolio/sections/Contact', element: <ContactSection /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
