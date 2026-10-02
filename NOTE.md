# NOTE.md

## ESLintを残している理由

主のlinterはoxlintである。ESLintはRSC用のlintを動かすためだけに置いている。
使っているのはTanStack公式の@tanstack/eslint-plugin-startである。
no-client-code-in-server-componentとno-async-client-componentの2ルールを有効にしている。

このプラグインはoxlintのJSプラグインとしては動かない。
2026年10月1日にoxlint 1.85で試したところ、lint対象の全ファイルが「requires type information」というエラーで止まった。
oxlintはJSプラグインに渡すparserServicesを空のオブジェクトに固定している。型情報を使うoxlintの仕組みはネイティブルール専用で、JSプラグインには届かない。
一方で両ルールは、最初にTypeScriptのProgramと型チェッカーを取り出し、その上で解析を組み立てている。全ソースファイルを走査して描画グラフを作り、import先のシンボルをファイルをまたいで解決し、ESTreeとTypeScriptのノードを対応づけて報告する。
型情報がなければ一部の検出が漏れるのではなく、ルールそのものが起動しない。
oxlint側で動かすには、Programを自前で作ってASTの対応表を用意するラッパーが要る。これはtypescript-eslintのパーサーを作り直すことに等しく、自作は最終手段という原則に反する。そこで公式の統合手段である型情報付きのESLintを選んだ。

## pnpm patch

patches/にはこのプラグインへのpnpm patchがある。
renderServerComponentに渡したコンポーネントの中を解析しない不具合と、ルートの下で描画されるasyncなコンポーネントを報告しない不具合を直している。
ESLintで動かしている限り、このpatchも必要である。

## ESLintを外せる条件

oxlintのJSプラグインにTypeScriptのProgramが渡るようになるか、TanStackがoxlintに対応した版を出せば外せる。
oxlintやプラグインを更新したときは、プラグインをoxlintのjsPluginsに載せて違反を仕込み、検出されるかを確かめる。
検出できれば、ESLint本体と設定ファイル、関連する依存、verifyのESLintの段を取り除く。

## テンプレートから外したもの

テンプレートにある認証、データベース、API、機能フラグ、サーバー状態の仕組みは持たない。
このサイトは静的な掲載物だけで成り立ち、ログインや保存するデータを持たない。
使わない依存と未参照のカタログ項目はfallowが落とすため、better-auth、Drizzle、D1、ElysiaJS、Eden、OpenFeature、TanStack Queryを依存から外した。
データベースがないので、verifyからdb:checkの段も外した。
データベースやAPIが必要になったら、テンプレートの構成に戻して足す。

## YouTubeを埋め込まない理由

YouTubeの埋め込みプレーヤーは、iframeのsandboxにallow-scriptsとallow-same-originの両方を要る。
この組み合わせは@eslint-react/dom-no-unsafe-iframe-sandboxが危険として落とす。sandboxを外すとreact/iframe-missing-sandboxが落とす。
そこでデモソングはWorksと同じく、サムネイル画像からYouTubeへリンクする。

## 旧URLの転送

旧サイトはHashRouterで、URLは /#/voicebank の形だった。
ハッシュはサーバーに届かず、TanStack Routerはハイドレーションの際にbeforeLoadを走らせない。
そこでトップページのheadに、ハッシュを見てページを移すスクリプトを置いている。

## 旧サイトの .claude/rules を消した理由

旧サイトは .claude/rules/ に5つの手書きガイドを置いていた。CLAUDE.mdは手書きの文章をルートの4文書とdocs/に限り、ガイドに書くだけで済ませず検査で強制すると定めている。そこでガイドは消し、中身を次のように移した。

- テーマ値だけで装飾する規則は、DESIGN.mdと@shadcn/lintのno-raw-colors・no-arbitrary-valuesが受け持つ
- 1ファイル1コンポーネントの規則は、react/no-multi-compが受け持つ
- アセットは apps/web/public に移し、番号付きのディレクトリ構成とWebP・WebMの使用を保った
- 遅延読み込みはLazyImageとLazyVideoをやめ、img要素のloading属性に任せた
- Storybookはテンプレートがテストを持たないため外した。wrapAlphanumericは使う箇所がなくなった

型をtypeで定義しinterfaceを使わない規則は、コードでは守っている。typescript/consistent-type-definitionsで強制しようとしたが、TanStack RouterのRegisterはinterfaceの宣言マージでしか書けず、例外を設けない限り有効にできないため見送った。

## 旧サイトの検査ツールの置き換え先

旧サイトの検査ツールは、テンプレートにある同等以上の検査へ置き換えた。CLAUDE.mdはlint・fmt・checkをVite+のルート設定ひとつにまとめると定めているため、旧ツールと併用しない。

- Biome → oxlint・oxfmt。oxlintは全カテゴリをerrorにしており、未使用のimportや変数もここで落ちる
- lefthook → Vite+のgitフック
- knip → fallow
- tsconfig.node.json → 不要。ルートとapps/webのtsconfigが設定ファイルの *.ts を含む。tsconfig.stories.jsonはStorybookとともに外した
- 別名 @/ → apps/webのpackage.jsonのimportsとtsconfigのpathsで定義する #/
