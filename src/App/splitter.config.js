const path = require("path");
const fableSplitter = require("fable-splitter").default

function resolve(filePath) {
  return path.resolve(__dirname, filePath)
}

const babelOptions = {
  plugins: [
    ["transform-es2015-modules-commonjs"],
  ],
  sourceMaps: true
}

const fableOptions = {
  fableCore: resolve("./packages/Fable.Core/fable-core")
}

const options = {
  entry: "./App.fsproj",
  outDir: "./out",
  babel: babelOptions,
  fable: fableOptions
}

fableSplitter(options)
