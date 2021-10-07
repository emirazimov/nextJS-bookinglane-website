// const withImages = require("next-images")
// const withTM = require("@weco/next-plugin-transpile-modules")
// module.exports = {
//   reactStrictMode: true,

//   // withImages()
// }

// module.exports = withTM({
//   transpileModules: ["react-calendar"],
//   // withImages()
// })
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }, // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
}
