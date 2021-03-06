const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setting = {
    target: 'electron-main',
    entry: './src/main/main.ts',
    output: {
        path: path.resolve(__dirname, '..', 'src', 'main_build'),
        filename: '[name].bundle.js',
    },
    externals: [
        function(_, request, callback) {
            if (!/^\..*/.test(request)) {
                return callback(null, `commonjs ${request}`);
            }
            callback();
        },
    ],
    module: {
        rules: [],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};

module.exports = merge(common, setting);
