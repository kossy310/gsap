const MODE = "development";
const enabledSourceMap = MODE ==="development"

module.exports = {
    entry:`./src/index.js`,
    output: {
        path:`${__dirname}/dist`,
        filename:"main.js"
    },
    mode:"development",
    devServer: {
        static:"dist",
        open:true
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-env",
                  ],
                },
              },
            ],
          },
        ],
      },
      target: ["web", "es5"],
};