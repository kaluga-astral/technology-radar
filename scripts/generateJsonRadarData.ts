import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/extensions
import * as radarData from '../src/config/radarData/index.ts';

const publicDir = path.resolve('..', 'public');

Object.entries(radarData).forEach(([name, { data }]) => {
  fs.writeFile(
    path.join(publicDir, `${name}.json`),
    JSON.stringify(data),
    () => {},
  );
});
