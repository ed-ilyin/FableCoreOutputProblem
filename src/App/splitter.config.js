const fableSplitter = require("fable-splitter").default;

const babelOptions = {
    plugins: [
        ["transform-es2015-modules-commonjs"],
    ],
    sourceMaps: true
};

const options = {
    entry: "./App.fsproj",
    outDir: "./out",
    babel: babelOptions
};

fableSplitter(options);
