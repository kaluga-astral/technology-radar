import { Grid } from '@astral/ui';

import { BASE_PATH, RENDER_RADAR_URL } from '../../config';

import { RadarStyled } from './styles';

type RadarProps = {
  jsonName: string;
};

export const Radar = ({ jsonName }: RadarProps) => {
  return (
    <Grid spacing={2}>
      <RadarStyled
        src={`${RENDER_RADAR_URL}/?documentId=${window.origin}${BASE_PATH}/${jsonName}.json`}
      />
    </Grid>
  );
};
