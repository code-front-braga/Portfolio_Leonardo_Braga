import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';

import { HomeSection } from './sections/Home/Home.tsx';
import { AboutMeSection } from './sections/AboutMe/About-Me.tsx';
import { SkillsSection } from './sections/Skills/Skills.tsx';
import { ProjectsSection } from './sections/Projects/Projects.tsx';
import { ContactSection } from './sections/Contact/Contact.tsx';
import { IRoute } from './interfaces/interfaces';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: 'home', element: <HomeSection /> },
      { path: 'about', element: <AboutMeSection /> },
      { path: 'skills', element: <SkillsSection /> },
      { path: 'projects', element: <ProjectsSection /> },
      { path: 'contact', element: <ContactSection /> },
    ] as IRoute[],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
