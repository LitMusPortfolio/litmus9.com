# DESIGN.md

UIはshadcn/uiのコンポーネントで組む。
色・余白・角丸はテーマトークンだけを使い、任意値を書かない。
トークンは apps/web/src/app/styles.css に置く。
背景は黒、本文は明るい灰色、強調は紫とする。
本文はZen Kaku Gothic New、見出しはNoto Sans JP、英字の装飾はMontserratで組む。
見出しは画像の帯を敷いたマーカーで飾り、各ページの左右に縦書きのページ名を淡く置く。
ブラウザの機能はBaseline Widely availableの範囲で使い、実装はmodern-web-guidanceスキルの指針に従う。
