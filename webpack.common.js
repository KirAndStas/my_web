const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template : './etc/index.html.sample',
    filename : 'index.html',
    inject   : 'body'
});

module.exports = {
    entry  : './client/index.js',
    output : {
        path       : path.resolve('dist'),
        filename   : 'bundle.js'
    },
    module : {
        loaders : [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
            // { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            // { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            // { test: /\.png$/, loader: 'file-loader', options: { name: '[name].[ext]' } },
            // { test: /\.svg$/, loader: 'file-loader', options: { name: '[name].[ext]' } },
            // { test: /\.(woff|woff2|ttf|eot)$/, loader: "url-loader?limit=1" }
            // { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            // { test: /\.svg$/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" }
        ]
    },
    plugins : [ HtmlWebpackPluginConfig ]
};
