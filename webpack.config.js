const path = require("path");
const ExtractTestPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        context: path.resolve(__dirname, "src"),
        entry: {
            app: "./js/app.js"
        },
        output: {
            path: path.join(__dirname, "public"),
            filename: "./js/bundle.js"
        },
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query:{
                        presets: ["es2015", "react", "stage-2"]
                    }
                }
            ]
        },
        devtool: "source-map",
        resolve: {
            extensions: ["*", ".js", ".jsx"]
        }
    },
    {
        context: path.resolve(__dirname, "src"),
        entry: {
            app: "./sass/app.scss"
        },
        output: {
            path: path.join(__dirname, "public"),
            filename: "./css/style.css"
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTestPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader?-url&minimize&sourceMap!sass-loader"
                    })
                }
            ]
        },
        devtool: "source-map",
        plugins: [
            new ExtractTestPlugin("./css/style.css")
        ]
    }
];