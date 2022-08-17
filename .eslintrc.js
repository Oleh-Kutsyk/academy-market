module.exports = {
  env: {
    browser: true, // Browser project
  },
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json', // Typescript Lang Config - https://www.typescriptlang.org/tsconfig
    tsconfigRootDir: '.',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  },

  settings: {
    react: {
      pragma: 'React', //  Tells eslint-plugin-react that is Pragma to use, default to 'React'
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  plugins: [
    '@typescript-eslint/eslint-plugin', // same as @typescript-eslint
    'eslint-plugin-react', // same as react
    'eslint-plugin-react-hooks', // same as hooks
    'eslint-plugin-prettier', // same as prettier
  ],

  extends: [
    // Uses the recommended rules from eslint
    'eslint:recommended',

    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',

    // Uses the recommended rules from @eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',

    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // Uses to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'eslint-config-prettier', // same as prettier

    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],

  ignorePatterns: [
    './node_modules/*',

    'coverage',

    'build',
    'build-config',
    'ci-scripts',

    '*.css',
    '*.json',
    '*.html',
    '*.md',
    '*.lock',
    '.eslintrc.js',
    '.prettierrc.js',
    'git-workflow-diagram.png',
  ],

  // ESLint rules - https://eslint.org/docs/rules/
  rules: {
    'react-hooks/rules-of-hooks': 'error', // For checking rules of hooks
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'no-unused-vars': 'off', // note you must disable the base rule as it can report incorrect errors (should use '@typescript-eslint/no-unused-vars')
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // just if u use ts for correct naming
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],

    'react/prop-types': 'off', // ignore prop-types in mixed JS/TypeScript
    'react/jsx-tag-spacing': [
      'error',
      {
        // validate whitespace in and around the JSX opening and closing brackets (fixable)
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error', // prevent missing parentheses around multilines JSX (fixable)
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        // disallow multiple spaces
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],

    // Best Practices
    'accessor-pairs': 'error', // require grouped accessor pairs in object literals and classes
    'array-callback-return': 'error', // enforce return statements in callbacks of array methods
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
    'class-methods-use-this': 'off', // enforce that class methods utilize this (can be warn)
    'default-case': 'error', // require default cases in switch statements
    'default-case-last': 'error', // enforce default clauses in switch statements to be last
    'default-param-last': 'error', // enforce default parameters to be last
    'grouped-accessor-pairs': 'error', // require grouped accessor pairs in object literals and classes
    'guard-for-in': 'warn', // require for-in loops to include an if statement
    'max-classes-per-file': ['error', 3], // enforce a maximum number of classes per file
    'no-caller': 'error', // disallow the use of arguments.caller or arguments.callee
    'no-constructor-return': 'error', // disallow returning value from constructor
    'no-else-return': 'error', // disallow return before else
    'no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
      },
    ],
    'no-shadow': 'off', // disallow variable declarations from shadowing variables declared in the outer scope
    'no-duplicate-imports': 'error', // disallow duplicate module imports
    'no-var': 'error', // require let or const instead of var
    'object-shorthand': ['warn', 'always'], // require Object Literal Shorthand Syntax
    'prefer-const': 'error', // require const declarations for variables that are never reassigned after declared
    'prefer-template': 'error', // suggest using template literals instead of string concatenation
    'rest-spread-spacing': ['error', 'never'], // enforce spacing between rest and spread operators and their expressions
    // Prettier integration
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
