import { BrowserRouter } from 'react-router-dom';
import MainRouter from './router/mainRouter';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MainRouter />
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
