import { Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '@astral/components';
import { Typography } from '@mui/material';

import { Radar } from '../index';
import { getDataConfig } from '../../utils';

export const Main = () => {
  return (
    <DashboardLayout.Main>
      <Routes>
        <Route
          path="/"
          key={'route-home'}
          element={<Typography>Home</Typography>}
        />
        {getDataConfig().map(([id]) => (
          <Route
            path={`/${id}`}
            element={<Radar jsonName={id} />}
            key={`route-${id}`}
          />
        ))}
        <Route path="/*" element={<Typography>Не найдено</Typography>} />
      </Routes>
    </DashboardLayout.Main>
  );
};
