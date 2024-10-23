import { ThemeProvider } from 'styled-components';
import { Theme } from './store/theme';

export function App() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}
