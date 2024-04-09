'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://cyril.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://cyril.com';",
      output: "var test = 'http://cyril.com';",
      errors: [
        {
          message: 'Recommended "http://cyril.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://cyril.com' />",
      output: "<img src='http://cyril.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://cyril.com" switch to HTTPS',
        },
      ],
    },
  ],
});
