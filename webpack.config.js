const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
        watchFiles: ['./src/index.html'], // Specify the HTML files to watch
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Restaurant Page',
        template: './src/index.html', // Specify your template HTML file
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
