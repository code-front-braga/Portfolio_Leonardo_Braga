import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';

import { AppRouter } from './Router.tsx';
import { GlobalStyles } from './global.ts';

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}
