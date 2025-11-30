# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要

- サーバーは常に起動しています。自分で起動する必要はありません。
- StorybookでUIコンポーネントの動作を確認できます: `pnpm storybook`

## 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動 (http://localhost:5173)
pnpm dev

# ビルド
pnpm build

# コード品質チェック（コミット前に実行推奨）
pnpm lint          # Biomeによるリント
pnpm typecheck     # TypeScriptの型チェック
pnpm check-all     # 全チェック（knip + lint + typecheck + typecheck:stories）

# Storybook
pnpm storybook     # Storybook起動
pnpm build-storybook  # Storybookビルド

# ビジュアルテスト
pnpm screenshot    # スクリーンショット生成
pnpm visual-test   # ビジュアル回帰テスト実行

# ストーリー管理
pnpm generate-stories  # ストーリーファイルの自動生成
pnpm check-stories     # ストーリーの存在チェック
```

## アーキテクチャ概要

### 技術スタック
- **Vite + React 19 + TypeScript**: 高速な開発環境と型安全性
- **styled-components**: テーマベースのCSS-in-JS
- **React Router v7 (HashRouter)**: GitHub Pages対応ルーティング
- **Biome**: 統一されたリンター/フォーマッター
- **Storybook**: コンポーネントカタログとビジュアルテスト

### コンポーネント設計の原則

1. **テーマ駆動設計**: 全てのスタイリングは`theme.ts`の値を使用
2. **コンポジション重視**: 小さな部品を組み合わせて複雑なUIを構築
3. **型安全性**: 全コンポーネントにProps型を定義（`type`を使用、`interface`は禁止）
4. **レスポンシブ対応**: モバイルファーストで設計

## ページ構成パターン

各ページは以下の構造を持つ：
```
pages/
└── [PageName]/
    ├── index.tsx           # ページエントリーポイント
    ├── index.stories.tsx   # Storybookストーリー
    ├── components/         # ページ固有コンポーネント
    ├── sections/           # セクション分割（大規模ページ用）
    ├── data/               # 静的データ定義
    ├── hooks/              # カスタムフック
    ├── types/              # 型定義
    ├── config/             # 設定値
    └── utils/              # ユーティリティ関数
```

## スタイリングシステム

### テーマオブジェクト

全てのスタイリングは`src/styles/theme.ts`のテーマ値を使用すること。colors, typography, space, breakpoints, effectsなどが定義されている。

### スタイリングパターン

独自のスタイル定義をすることは必要最低限とすること。基本的には GlobalStyle.ts にすべてまとまるようにする。

```typescript
// styled-componentsでのテーマ使用
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.sm};
  }
`;

// Transient props（DOMに渡さない）
type Props = {
  $isActive?: boolean;  // $ prefix
};
```

## タイポグラフィシステム

日英混在テキストの処理：
```typescript
import { wrapAlphanumeric } from "@/utils/typography";

// 英数字を<span class="en">でラップ
const formattedText = wrapAlphanumeric("離途 Lit 2024");
```

## ルーティング構成

HashRouterを使用（GitHub Pages対応）：
- `/` - HomePage
- `/about` - AboutPage
- `/works` - WorksPage
- `/voicebank` - VoicebankPage（離途キャラクターページ）
- `/contact` - ContactPage

全ページはReact.lazy()で遅延読み込み。

## パフォーマンス最適化

1. **コード分割**: 各ページを個別バンドルに
2. **メディア最適化**: WebP画像、WebM動画を使用
3. **遅延読み込み**: LazyImage/LazyVideoコンポーネント
4. **固定背景**: パララックス効果で`background-attachment: fixed`

## デプロイメント

GitHub Actionsによる自動デプロイ：
- mainブランチへのpushで自動デプロイ
- PRでビジュアル回帰テスト実行
- GitHub Pages（https://litmusportfolio.github.io/）で公開

## 開発時の注意事項

1. **コミット前チェック**: lefthookにより自動実行
   - Biomeによるフォーマット
   - TypeScript型チェック

2. **画像/動画アセット**:
   - `public/`以下に配置
   - 番号プレフィックスで整理（001_top/, 101_Lit/など）
   - 最適化フォーマット使用（WebP, WebM）

3. **コンポーネント作成時**:
   - 必ずStorybookストーリーを作成
   - Props型を定義（`type`を使用）
   - テーマの値を使用してスタイリング

4. **型定義**:
   - 共通型は`src/types/`に配置
   - ページ固有の型は各ページの`types/`に配置
