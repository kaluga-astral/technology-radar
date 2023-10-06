import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, Typography } from '@astral/ui';
import { DashboardLayout } from '@astral/ui';

import { theme } from './theme';
import { Header, Radar, SideBar } from './components';
import { BASE_PATH, TEAMS } from './config';
import { IntroScreen } from './screens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DashboardLayout>
          <Header />
          <SideBar />
          <DashboardLayout.Main>
            <Routes>
              <Route path={BASE_PATH} element={<IntroScreen />} />
              {Object.entries(TEAMS).map(([id]) => (
                <Route
                  key={id}
                  path={`${BASE_PATH}/${id}`}
                  element={<Radar jsonName={id} />}
                />
              ))}
              <Route path="/*" element={<Typography>Не найдено</Typography>} />
            </Routes>
          </DashboardLayout.Main>
        </DashboardLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
