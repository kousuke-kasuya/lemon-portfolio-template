// =============================
// main.js — Lemon Portfolio Template
// =============================
// 使い方：
//   「js/main.jsに〇〇を追加して」と Gemini CLI に伝えてください
//   GEMINI_PROMPT.md にコピペで使えるプロンプトが載っています
// =============================


// =============================
// ヘッダー：スクロール時に背景を追加
// スクロールすると半透明の背景が現れる
// =============================
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}


// =============================
// スクロールアニメーション
// =============================
// Gemini CLI へのプロンプト例：
//   js/main.jsに、スクロールしたときに各セクションがふわっと表示される
//   アニメーションを追加して。HTMLやCSSは変えないで、JavaScriptだけで実装して。


// =============================
// ハンバーガーメニュー（スマホ用）
// =============================
// Gemini CLI へのプロンプト例：
//   スマホ用のハンバーガーメニューを追加したい。
//   index.htmlのheaderにボタンを追加して、
//   js/main.jsに開閉の処理を書いて。
//   css/style.cssにもスタイルを追加して。


// =============================
// その他（自由に追加してね）
// =============================
