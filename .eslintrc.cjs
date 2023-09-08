module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'no-unused-vars':'warn', 
    'no-undef': 'error', 
    'no-use-before-define': 'error',
    'quotes': ['error', 'single'], 
    'comma-spacing': 'warn', 
    'object-curly-spacing': ['error', 'always'], 
    'indent': ['error', 2], 
    'no-var': 'error', 
    'semi': ['warn', 'always', { 'omitLastInOneLineBlock': true }], 
  }
};
