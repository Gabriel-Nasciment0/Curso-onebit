import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: {
        index: "./src/index.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};
