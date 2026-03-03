import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: './dist',
  format: ['esm', 'cjs'],
  entry: {
    'index': './src/index.ts',
    'lang/en': './src/lang/en.ts',
    'lang/id': './src/lang/id.ts',
    'lang/pt': './src/lang/pt.ts',
    'lang/zh': './src/lang/zh.ts',
    'lang/ar': './src/lang/ar.ts',
    'lang/bn': './src/lang/bn.ts',
    'lang/de': './src/lang/de.ts',
    'lang/es': './src/lang/es.ts',
    'lang/fr': './src/lang/fr.ts',
    'lang/hi': './src/lang/hi.ts',
    'lang/ja': './src/lang/ja.ts',
    'lang/mr': './src/lang/mr.ts',
    'lang/ru': './src/lang/ru.ts',
    'lang/sw': './src/lang/sw.ts',
    'lang/ur': './src/lang/ur.ts',
  },
  dts: true,
  clean: true,
  splitting: false,
  minify: true,
  bundle: true,
});
