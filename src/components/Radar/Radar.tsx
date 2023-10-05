import { Grid } from '@astral/ui';

import { RENDER_RADAR_URL } from '../../config';

import { Legends } from './Legends';
import { LegendsContainer, RadarStyled } from './styles';

type RadarProps = {
  jsonName: string;
};

export const Radar = ({ jsonName }: RadarProps) => {
  return (
    <Grid spacing={2}>
      <RadarStyled
        src={`${RENDER_RADAR_URL}/?documentId=${window.origin}/${jsonName}.json`}
      />
      <LegendsContainer title="Легенда">
        <Legends />
      </LegendsContainer>
    </Grid>
  );
};
