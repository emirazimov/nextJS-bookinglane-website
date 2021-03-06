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
  // images: {
  //   domains: ["https://landing-page-nextjs.s3.us-east-2.amazonaws.com"],
  // },
  // compress: false,
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
  // images: {
  //   loader: "imgix",
  //   path: "",
  // },
  // images: {
  //   loader: "static",
  // },
}
