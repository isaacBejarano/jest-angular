module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    // "<rootDir>/cypress/",
    // in case you wanna use cypress instead of protractor
  ],
  // transformIgnorePatterns: ["node_modules/(?!@ngrx|ngx-socket-io)"],
  // common used packages that throw errors
  // transform: { "^.+\\.(ts|js|html)$": "ts-jest" },
  coverageReporters: ["text"],

  // jest.config.js
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  // "test:ci": "jest --runInBand",
};
