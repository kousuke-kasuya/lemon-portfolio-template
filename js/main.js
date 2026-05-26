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


// =============================
// 🌸 桜の花びら演出
// =============================
let lastScrollTop = 0;
let scrollDistance = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollDistance += Math.abs(scrollTop - lastScrollTop);
  lastScrollTop = scrollTop;

  // 一定距離（例：80px）スクロールするごとに花びらを1〜2枚生成
  if (scrollDistance > 80) {
    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
      createSakuraPetal();
    }
    scrollDistance = 0;
  }
});

function createSakuraPetal() {
  const petal = document.createElement('div');
  petal.classList.add('sakura-petal');

  // ランダムなサイズ (8px - 15px)
  const size = Math.random() * 7 + 8;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  // ランダムな横位置
  petal.style.left = `${Math.random() * 100}vw`;

  // ランダムなアニメーション時間
  const fallDuration = Math.random() * 3 + 4; // 4s - 7s
  const swayDuration = Math.random() * 2 + 2; // 2s - 4s

  petal.style.animation = `
    fall ${fallDuration}s linear forwards,
    sway ${swayDuration}s ease-in-out infinite
  `;

  // 少しランダムな不透明度
  petal.style.opacity = Math.random() * 0.4 + 0.5;

  document.body.appendChild(petal);

  // アニメーション終了後に要素を削除
  setTimeout(() => {
    petal.remove();
  }, fallDuration * 1000);
}
