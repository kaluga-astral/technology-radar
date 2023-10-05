import { Route, Routes } from 'react-router-dom';
import { DashboardLayout, Typography } from '@astral/ui';

import { Radar } from '../Radar';
import { TEAMS } from '../../config';

export const Main = () => {
  return (
    <DashboardLayout.Main>
      <Routes>
        {Object.entries(TEAMS).map(([id]) => (
          <Route key={id} path={`/${id}`} element={<Radar jsonName={id} />} />
        ))}
        <Route path="/*" element={<Typography>Не найдено</Typography>} />
      </Routes>
    </DashboardLayout.Main>
  );
};
