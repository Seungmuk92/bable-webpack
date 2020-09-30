const HtmlWebpackPlugin = require('html-webpack-plugin');

//// Set port for dev server.
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',

    //// Entry point of the application.
    entry: './src/index.js',
    
    //// Name of the output file.
    output: {
        filename: 'bundle.[hash].js'
    },
    
    module: {
        rules: [
            //// Loder for ES6 Babel.
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            //// Loader for html.
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },

    //// Plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],

    //// Settins for webpack-dev-server
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    },
};