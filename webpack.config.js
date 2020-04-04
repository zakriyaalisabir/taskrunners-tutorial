const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "public", "app.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename:"bundle.js"
    },
    mode: "development",
    plugins: [
        new htmlWebpackPlugin({
            filename: path.join(__dirname, "dist", "index.html"),
            template:path.join(__dirname,"src","views","index.html")
        })
    ]
}