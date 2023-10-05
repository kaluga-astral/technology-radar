const { VITE_RENDER_RADAR_URL: RENDER_RADAR_URL } = import.meta.env;

export { RENDER_RADAR_URL };

export const TEAMS: Record<string, { name: string }> = {
  edo: { name: 'ЭДО' },
  lkp: { name: 'ЛКП' },
};
