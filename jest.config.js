module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@jest/(.*)$": "<rootDir>/node_modules/@jest/$1"
  }
};
