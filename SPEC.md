# SPEC.md

LitMusの公式サイト litmus9.com である。ポートフォリオを載せ、合成音声ライブラリ「離途」を配布する。

## 要求

トップ、About、Works、Voicebank、Contactの5ページを持つ。
Worksは作品をカテゴリで絞り込み、各作品のYouTubeへリンクする。
Voicebankは離途の紹介、プロフィール、配布物、利用規約を載せる。配布物は種類で絞り込み、選ぶと詳細とダウンロード先をダイアログで示す。
Contactはメールアドレスを、閲覧者が操作したときだけ表示する。
PC向けのサイトであり、狭い画面では閲覧をPCに促す案内だけを出す。
旧サイトのハッシュ形式のURLと /lit は、対応するページへ転送する。
必須技術を使っていなければ、検査が失敗する。ガイドに書くだけでは強制しない。
テストは持たない。CIはGitHub Actionsで検証だけを走らせる。RCやbetaのバージョンも許容する。

## 技術

masseater/typescript-templateから作った。
言語はTypeScript 7で、effectと@effect/tsgoを使う。
リポジトリはVite+によるモノレポである。
アプリはTanStack Startで組む。
UI状態はeffect-atom、UIはshadcn/uiとTailwind CSS、構成はFeature-Sliced Designに従う。
掲載データの検証にはEffectのSchemaを使う。
デプロイ先はCloudflare Workersで、Alchemyで定義する。
検査にはoxlint、oxfmt、fallow、steiger、textlint、yomiyasuを使う。
依存の更新はRenovateで行い、CIが通ったものだけを自動でマージする。
