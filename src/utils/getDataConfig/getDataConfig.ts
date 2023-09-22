import { TEAMS } from '../../config';

type DataConfig = [id: string, { name: string }][];

export const getDataConfig = (): DataConfig => Object.entries(TEAMS);
