const path = require('path')

module.exports = {
  globalSetup: path.join(__dirname, 'jest.global-setup.js'),
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '@issue(.*)$': '<rootDir>/src/$1',
  },
  rootDir: __dirname,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: [`./**/*.test.ts`],
  testTimeout: 120000,
  verbose: true,
}
