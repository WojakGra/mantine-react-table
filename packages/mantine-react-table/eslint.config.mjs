import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/', 'locales/', 'node_modules/', 'storybook-static/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    files: ['**/*.cjs'],
    languageOptions: { globals: { module: 'writable', require: 'readonly' } },
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-duplicate-imports': ['warn', { allowSeparateTypeImports: true }],
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: [
            { elementNamePattern: '^clsx$', groupName: 'clsx' },
            { elementNamePattern: '\\.module\\.css$', groupName: 'style' },
            { elementNamePattern: '^react(-.*)?$', groupName: 'react' },
            { elementNamePattern: '^@tanstack/', groupName: 'tanstack' },
            { elementNamePattern: '^@mantine/', groupName: 'mantine' },
            {
              elementNamePattern: ['MRT_', '^\\.\\./\\.\\./src$'],
              groupName: 'mrt',
            },
          ],
          groups: [
            'clsx',
            'style',
            'react',
            'tanstack',
            'mantine',
            'mrt',
            ['sibling', 'parent'],
            'unknown',
          ],
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-modules': 'off',
    },
  },
);
