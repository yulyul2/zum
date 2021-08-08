const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let cssExports = {};

// common configurations
const config = {
    mode: "production", // development OR production
    output: {
        path: path.resolve(__dirname, "src/dist/css/"), 
        // filename: "[name].css"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".css", ".scss"],
        alias: {
            css: path.resolve(__dirname, "src/entry/scss/")
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: ["/node_modules"],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true } }],
                }
            })
        ]
    }
}

// config list
cssExports.egloos = Object.assign({}, config, {
    entry: {
        egloos: "./src/entry/scss/egloos.scss"
    }
});

module.exports = cssExports;