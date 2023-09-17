import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import { getDataConfig } from './utils/getDataConfig';
import { Header, Main, Radar, SideBar } from './components';
import { TEAMS } from './config';

function App() {
  const [isDrawerShow, setIsDrawerShow] = useState(false);
  const configData = getDataConfig();
  const handleDrawerClose = (): void => {
    setIsDrawerShow(false);
  };
  const handleDrawerOpen = (): void => {
    setIsDrawerShow(true);
  };

  return (
    <BrowserRouter>
      <Box>
        <Header open={isDrawerShow} onClick={handleDrawerOpen} />
        <SideBar
          isDrawerShow={isDrawerShow}
          onClickDrawer={handleDrawerClose}
        ></SideBar>
        <Main>
          <Routes>
            <Route
              path="/"
              key={'route-home'}
              element={<Typography>Home</Typography>}
            />
            {Object.entries(TEAMS).map(([id]) => (
              <Route path={`/${id}`} element={<Radar jsonName={id} />} />
            ))}
            <Route path="/*" element={<Typography>Не найдено</Typography>} />
          </Routes>
        </Main>
      </Box>
    </BrowserRouter>
  );
}

export default App;
