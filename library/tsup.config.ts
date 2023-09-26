import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: './dist',
  format: ['esm', 'cjs'],
  entry: ['./src/index.ts'],
  dts: true,
  clean: true,
  splitting: true,
  minify: true,
});
