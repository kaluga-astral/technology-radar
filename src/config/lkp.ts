import { ProductConfigType } from './types';

export const lkp: ProductConfigType = {
  productName: 'ЛКП',
  productId: 2,
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
