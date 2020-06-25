const path = require("path");
module.exports = {
  entry:{
    main: "./src/index.js",
    analytics: "./src/analytics.js"
},
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  }
};
