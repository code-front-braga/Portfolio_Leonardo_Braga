import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';

import { Router } from './Router.tsx';

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}
