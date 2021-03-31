module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    transform: {
        ".*\\.(js)$": "babel-jest",
        ".*\\.(vue)$": "vue-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    transformIgnorePatterns: ['node_modules/(?!vuetify)'],
    testMatch: [
        '<rootDir>/tests/**/*.spec.js',
    ],
    setupFiles: ['<rootDir>/tests/setup.js']
}
