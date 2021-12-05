module.exports = {
  verbose: true,
  // bail: true,
  transform: {
    '^.+\\.ts': 'ts-jest',
  },
  testRegex: './__tests__/.+\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  rootDir: __dirname,
  maxWorkers: 2,
  testTimeout: 30000,
}
