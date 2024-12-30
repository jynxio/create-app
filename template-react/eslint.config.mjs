import pluginVanilla from '@eslint/js';
import pluginPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import globals from 'globals';
import pluginTypescript from 'typescript-eslint';

const pluginReactHookWrapper = {
    plugins: { 'react-hooks': pluginReactHook },
    rules: pluginReactHook.configs.recommended.rules,
};

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: ['**/out', '**/dist*/', '**/build*/', '**/.vercel'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    pluginVanilla.configs.recommended,
    pluginPrettier,
    ...pluginTypescript.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReactHookWrapper,
    {
        rules: {
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
