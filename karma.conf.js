let webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        autoWatch: true,
        port: 9000,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};