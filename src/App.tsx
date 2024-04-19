import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, Typography } from '@astral/ui';
import { DashboardLayout } from '@astral/ui';

import { theme } from './theme';
import { Header, Radar, SideBar } from './components';
import { TEAMS } from './config';
import { IntroScreen } from './screens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <DashboardLayout>
          <Header />
          <SideBar />
          <DashboardLayout.Main>
            <Routes>
              <Route path="/" element={<IntroScreen />} />
              {Object.entries(TEAMS).map(([id]) => (
                <Route
                  key={id}
                  path={`/${id}`}
                  element={<Radar jsonName={id} />}
                />
              ))}
              <Route path="/*" element={<Typography>Не найдено</Typography>} />
            </Routes>
          </DashboardLayout.Main>
        </DashboardLayout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
