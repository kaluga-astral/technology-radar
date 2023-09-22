import { RENDER_RADAR_URL } from '../../config';

import { RadarStyled } from './styles';

type RadarProps = {
  jsonName: string;
};

export const Radar = ({ jsonName }: RadarProps) => {
  return (
    <RadarStyled
      src={`${RENDER_RADAR_URL}/?documentId=${window.origin}/${jsonName}.json`}
    />
  );
};
