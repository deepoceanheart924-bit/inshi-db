<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Frontend design skill

UI/デザイン変更時は [.claude/skills/frontend-design/SKILL.md](.claude/skills/frontend-design/SKILL.md) を使う。発火対象:

- 新規ページ/コンポーネントのUI実装（例: [src/app/](src/app/) 配下、[src/components/](src/components/) 配下）
- 既存UIの「見た目を良くして」「デザインを整えて」系の依頼
- ダッシュボード・問題表示画面・模擬演習画面などの視覚的改善

**運用方針（inshi-db固有）:**
- 既存のshadcn/ui + Tailwind構成を壊さない範囲で、skillのaesthetic guidelinesを適用する
- skillは「Inter / Roboto / Arial等の汎用フォントを避けよ」と指示するが、既にプロジェクトで採用しているフォントがある場合はそれを優先し、新規ページや明確な刷新依頼時のみ個性的なフォントへ差し替える
- 配色は [src/app/globals.css](src/app/globals.css) のCSS変数を基調にする
