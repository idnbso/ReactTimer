var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    resolve: {
        root: __dirname,
        alias: {
            applicationStyles: 'app/styles/app.scss',
            Main: 'app/components/Main.jsx',
            Navigation: 'app/components/Navigation.jsx',
            Timer: 'app/components/timer/Timer.jsx',
            Countdown: 'app/components/countdown/Countdown.jsx',
            CountdownForm: 'app/components/countdown/CountdownForm.jsx',
            Clock: 'app/components/shared/Clock.jsx',
            Controls: 'app/components/countdown/Controls.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
