export default {
  '**/*.{js,jsx,cjs,mjs}': ['prettier --cache --write', 'eslint --cache --fix'],
  '**/*.{json,md,yml,yaml}': ['prettier --cache --write'],
  '{src,tests}/**/*.{ts,tsx,cts,mts}': ['prettier --cache --write', 'eslint --cache --fix'],
}
