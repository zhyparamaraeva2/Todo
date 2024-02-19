/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {

    roots: [
        "<rootDir>",
        "./"
    ],

    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],

    moduleDirectories: [
        'node_modules',
        "src"
    ],
    modulePaths: [
        './src/components',
    ],

    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    setupFilesAfterEnv: ['./setup.Tests.js'],

    testEnvironment: 'jsdom',

    testMatch: [
        '**/tests/*.js',
    ],


};