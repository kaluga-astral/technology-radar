import * as CONFIG from '../../config';
import { AllConfigsDataType } from '../../config/types';

export const getDataConfig = (): AllConfigsDataType => Object.entries(CONFIG);
