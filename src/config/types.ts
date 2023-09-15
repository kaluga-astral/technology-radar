export type ProductConfig = {
  productName: string;
  productId: string;
  radarData: RadarData;
};

export type AllConfigsData = ProductConfig[];

type RadarData = {
  rings: string[];
  quadrants: string[];
  data: { name: string; quadrant: string; ring: string }[];
};
