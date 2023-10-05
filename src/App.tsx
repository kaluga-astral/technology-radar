import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@astral/ui';
import { DashboardLayout } from '@astral/ui';

import { theme } from './theme';
import { Header, Main, SideBar } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DashboardLayout>
          <Header />
          <SideBar />
          <Main />
        </DashboardLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
