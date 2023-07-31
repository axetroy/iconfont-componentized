module.exports = {
    verbose: true,
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/output.spec.1/", "/dist/"],
};
