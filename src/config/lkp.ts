type Radar = {
  rings: string[];
  quadrants: string[];
  data: { name: string; quadrant: string; ring: string }[];
};

export const rootApp: string = 'lkp';

export const sidebarItem: string = 'ЛКП';

export const techRadar: Radar = {
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
};
