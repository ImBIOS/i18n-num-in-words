import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';

const dirPath = './src/lang';
const outputPath = './src/lang.type.ts';

chokidar.watch(dirPath).on('all', () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;

    const typeNames = files
      .map((file) => path.basename(file, '.ts'))
      .filter((name) => !name.endsWith('.test') && name !== 'index')
      .map((name) => `'${name}'`)
      .join('\n  | ');

    const output = `// WARNING: This file is generated automatically, do not edit manually.

/**
 * Language codes supported by the library. Based on the ISO 639-1 standard.
 */
export type Lang =
  | ${typeNames};
`;

    fs.writeFile(outputPath, output, (err) => {
      if (err) throw err;
    });
  });
});
