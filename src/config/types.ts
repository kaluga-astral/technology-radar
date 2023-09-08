export type ProductConfigType = {
  productName: string;
  productId: number;
  radarData: RadarDataType;
};

export type AllConfigsDataType = [string, ProductConfigType][];

export type RadarDataType = {
  rings: string[];
  quadrants: string[];
  data: { name: string; quadrant: string; ring: string }[];
};
