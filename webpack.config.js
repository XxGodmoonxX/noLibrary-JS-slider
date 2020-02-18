// 参考リンク
// https://qiita.com/soarflat/items/28bf799f7e0335b68186

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");

module.exports = {
  // Watchを有効にする
  watch: true,
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",
  // エントリーポイント 各モジュールを読み込んで処理するJS
  entry: "./src/app.js",
  // 出力の設定
  output: {
    // 出力ファイル名
    filename: "app.js",
    // 出力するパス名
    path: path.join(__dirname, "public/js")
  },
  // ローダーの設定
  module: {
    rules: [
      {
        // ローダーの処理対象
        test: /\.js$/,
        // ローダーの処理から外す
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: "babel-loader",
            // ローダーのオプション
            options: {
              // babelの設定
              // modules: false でimportがそのままになるらしい
              // presets: [["@babel/preset-env", { modules: false }]]
              presets: [["@babel/preset-env"]]
            }
          }
        ]
      }
    ]
  }
  // プラグインの設定
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery'
  //   })
  // ]
};
