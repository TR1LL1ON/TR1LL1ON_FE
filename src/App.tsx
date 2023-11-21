import { BrowserRouter } from 'react-router-dom';
import MainRouter from './router/mainRouter';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
