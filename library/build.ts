const build = await Bun.build({
  entrypoints: ['./src/lang/id/index.ts', './src/lang/en/index.ts'],
  splitting: true,
  format: 'esm', // TODO: add 'cjs'
  // minify: true,
  outdir: './dist',
});

const artifact = build.outputs[0];
console.info(artifact);

if (!build.success) {
  throw new AggregateError(build.logs, 'Build failed');
} else {
  console.info('\n', '\x1b[32m%s\x1b[0m', 'Build succeeded');
}
