var path = require("path");

module.exports = {
    entry: "./js/index.jsx",
    output: {
        filename: "out.js", path: path.resolve(__dirname, "js")
    },
    mode: "development", watch: true,
    watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-2","react"]
                }
            }
        }]
    },
    externals: {
        jquery: 'jQuery'
    }
};

