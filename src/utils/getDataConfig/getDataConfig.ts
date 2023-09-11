import * as CONFIG from '../../config';
import { AllConfigsData } from '../../config';

export const getDataConfig = (): AllConfigsData => Object.entries(CONFIG);
