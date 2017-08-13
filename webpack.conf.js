var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './app/ts/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: './app/js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            },
        ]
    },
};