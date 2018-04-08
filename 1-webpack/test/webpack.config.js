const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './js/factory.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
