/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'editorjs-inline-tool.js',
    library: 'EditorjsInlineTool',
    libraryTarget: 'umd',
    path: resolve(__dirname, './dist'),
  },
  devtool: 'source-map',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          cache: true,
          output: {
            comments: false,
          },
        },
        // https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments
        extractComments: true,
        // https://github.com/webpack-contrib/terser-webpack-plugin#sourcemap
        sourceMap: true,
      }),
    ],
  },
}
