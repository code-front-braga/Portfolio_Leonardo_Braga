import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';

export function App() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}
