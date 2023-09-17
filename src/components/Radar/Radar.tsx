import { RENDER_RADAR_URL } from '../../config';

type RadarProps = {
  jsonName: string;
};

export const Radar = ({ jsonName }: RadarProps) => {
  return (
    <iframe
      width="100%"
      height="1300px"
      src={`${RENDER_RADAR_URL}/?documentId=${window.origin}/${jsonName}.json`}
    />
  );
};
