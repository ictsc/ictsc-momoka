# ictsc-momoka

ictsc2021夏の陣用スコアサーバーのフロントエンド。

## development
- 開発にはVSCodeを利用して下さい。
- ESLint, Prettierをインストールして下さい。
- VSCodeの設定に以下を追加して下さい。
```
  "typescript.tsserver.pluginPaths": [
    "typescript-plugin-css-modules"
  ]
```

初回、パッケージが追加されたとき。
```
yarn
```

開発モードで実行
```
yarn start
```

storybookを実行
```
yarn storybook
```