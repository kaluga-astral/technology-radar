type QuadrantData = {
  adopt: [];
  trial: [];
  assess: [];
  hold: [];
};

export type RadarData = {
  libs: QuadrantData;
};

export type Config = {
  name: string;
  data: RadarData;
};
