// eslint.config.mjs (Full Corrected Code)
// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * This is the "Juggernaut" config file for a Next.js 16 / pnpm project.
 * It uses the modern "flat config" format.
 */
export default defineConfig([
  // 1. Explicit Ignores (Fixes TS2554 error by combining globalIgnores purpose with ignore list)
  { 
    ignores: [
      '**/.next/**', 
      '**/.pnpm-store/**', 
      '**/node_modules/**', 
      '**/public/**',
    ]
  }, 
  // 2. Base Rules & TypeScript
  eslint.configs.recommended, 
  ...tseslint.configs.recommended, 
  // 3. Next.js/React Vitals
  nextVitals, 
  // 4. Prettier Conflict Resolution (MUST be last)
  prettierConfig, 
  // 5. Custom Project Rules (Errors only)
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off', 
    },
  },
]);