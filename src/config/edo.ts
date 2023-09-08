import { ProductConfigType } from './types';

export const edo: ProductConfigType = {
  productName: 'ЭДО',
  productId: 1,
  radarData: {
    rings: ['adopt', 'trial', 'assess', 'hold'],
    quadrants: ['tools', 'techniques', 'platforms', 'languages'],
    data: [
      {
        name: 'D3',
        quadrant: 'tools',
        ring: 'assess',
      },
      {
        name: 'TypeScript',
        quadrant: 'languages',
        ring: 'trial',
      },
      {
        name: 'Storybook',
        quadrant: 'tools',
        ring: 'adopt',
      },
    ],
  },
};
