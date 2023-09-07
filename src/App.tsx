import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

import { Main } from './components';
import { getDataConfig } from './utils/getDataConfig';
import { Header } from './pages/Header';
import { SideBarLeft } from './pages/SideBarLeft';

function App() {
  const [isDrawerShow, setIsDrawerShow] = useState(false);
  const data = getDataConfig();
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
        <SideBarLeft
          isDrawerShow={isDrawerShow}
          handleDrawer={handleDrawerClose}
          listItems={data}
        ></SideBarLeft>
        <Main open={isDrawerShow}>
          <Routes>
            <Route
              path="/"
              element={<Button variant="contained">Home</Button>}
            />
            {data.map(({ rootApp, sidebarItem }) => (
              <Route
                key={'route-' + rootApp}
                path={`/${rootApp}`}
                element={<Button variant="contained">{sidebarItem}</Button>}
              />
            ))}
            <Route
              path="/*"
              element={<Button variant="contained">Не найдено</Button>}
            />
          </Routes>
        </Main>
      </Box>
    </BrowserRouter>
  );
}

export default App;
