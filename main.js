const languageSelect = document.getElementById("language-select");
const pageTitleNode = document.getElementById("page-title");
const metaDescriptionNode = document.getElementById("meta-description");

const translations = {
  ja: {
    pageTitle: "GloranthaGIS Information | RQ Adventurers' Inn",
    metaDescription:
      "GloranthaGIS の特徴、使いどころ、導入の流れ、ガイド、デモ動画をまとめたインフォメーションページです。",
    languageLabel: "Language",
    heroEyebrow: "Cosmic Promotion",
    heroTitle: "GloranthaGIS",
    heroLead: "地図は「見るもの」じゃない。遊ぶものだ。",
    heroText1: "距離を測る。土地を知る。セッションの現実感が変わる。",
    heroText2:
      "ドラゴン・パスやプラックスは、眺める背景ではなく、卓上で判断と会話を生むプレイ空間になります。",
    heroText3: "まずはプロモーションを一巡して、そのままいつもの Adventurers' Inn へどうぞ。",
    heroPrimaryAction: "アプリを開く",
    heroSecondaryAction: "動画を見る",
    heroTertiaryAction: "宿へ入る",
    heroJapaneseGuide: "日本語解説",
    heroEnglishGuide: "英語・その他言語",
    signalLabel: "Featured Tool",
    signalTitle: "GloranthaGIS",
    signalText:
      "地名検索、距離計測、範囲表示、PNG地図読込で、セッション中の地理判断を素早く共有できます。",
    demoLabel: "Demo Movie",
    demoTitle: "遊ぶ前に、世界が動く感覚を見せる。",
    demoLead:
      "スクロール前の短い動画で、このアプリが何を変えるのかを一目で伝えます。",
    demoBody:
      "短く見ても、GloranthaGIS が卓の判断と会話をどう支えるかが伝わる構成です。",
    demoAction: "YouTube で開く",
    featuresLabel: "What You Can Do",
    featuresTitle: "地図を、ただの画像ではなくプレイ面に変える。",
    featuresLead:
      "GloranthaGIS は地理情報を、卓のみんなが読んで判断できる情報に変換します。",
    feature1Title: "Place Jump",
    feature1Text: "日本語でも英語でも地名検索して、その場所へすぐにジャンプできます。",
    feature2Title: "Distance Measurement",
    feature2Text: "ルートを引いて、地点間の距離を実感のある長さで確認できます。",
    feature3Title: "Range Circle",
    feature3Text: "半径ツールで移動圏、勢力圏、効果範囲を視覚化できます。",
    feature4Title: "Layer View",
    feature4Text:
      "PNG地図を読み込み、ズーム、ドラッグ、レイヤー感覚で世界を見渡せます。",
    feature5Title: "Distance Origin Flag",
    feature5Text: "青い基準旗を置いて、画面中心からの南北東西距離を読み取れます。",
    feature6Title: "Built For Play",
    feature6Text:
      "実際のセッション中に使うことで、移動や地理の感覚が一気に具体的になります。",
    howtoLabel: "How to Start",
    howtoTitle: "3ステップですぐ始める。",
    howtoLead: "最初の体験は、技術的ではなく直感的であるべきです。",
    step1Title: "地図を用意",
    step1Text: "使いたい高解像度の Dragon Pass や Prax 地図を準備します。",
    step2Title: "PNGを読み込む",
    step2Text: "GloranthaGIS を開き、アプリ画面から PNG ファイルを読み込みます。",
    step3Title: "探索して遊ぶ",
    step3Text:
      "ズーム、距離計測、経路比較をしながら、セッションの中でそのまま使います。",
    howtoGuideJa: "完全ガイド（JP）",
    howtoGuideEn: "完全ガイド（EN）",
    useCasesLabel: "Use Cases",
    useCasesTitle: "卓で効く場面を、先に想像させる。",
    useCasesLead:
      "機能説明だけで終わらず、実際のプレイで役立つ絵が見えるようにします。",
    useCase1Title: "Travel Planning",
    useCase1Text:
      "今どこにいて、どこへ向かい、その旅がどれほどの意味を持つのかを共有できます。",
    useCase2Title: "Route Decisions",
    useCase2Text:
      "道、川、山脈、距離を並べて比較し、グループ全体で進路判断できます。",
    useCase3Title: "Range And Area",
    useCase3Text: "勢力圏、危険地帯、移動スケールを円と距離で理解できます。",
    useCase4Title: "Session Immersion",
    useCase4Text: "地図は背景絵ではなく、会話そのものを支える道具になります。",
    footerLabel: "RQ Adventurers' Inn",
    footerTitle: "関連情報へ戻る",
    footerText:
      "GloranthaGIS は RQ Adventurers' Inn の配布・発信の一部です。他のツールや関連情報は元サイト側で案内しています。",
    footerNote: "会社概要もご案内しています",
    footerPrimaryAction: "メインサイト",
    footerSecondaryAction: "会社概要",
    footerQrText: "QR からもアクセスできます"
  },
  en: {
    pageTitle: "GloranthaGIS Information | RQ Adventurers' Inn",
    metaDescription:
      "An information page for GloranthaGIS covering features, onboarding, guides, and the demo movie.",
    languageLabel: "Language",
    heroEyebrow: "Cosmic Promotion",
    heroTitle: "GloranthaGIS",
    heroLead: "Maps are not just for looking at. They are for play.",
    heroText1: "Measure distance. Know the land. Make every session feel real.",
    heroText2:
      "Dragon Pass and Prax stop being background scenery and become a play space that drives decisions and conversation at the table.",
    heroText3: "Take a quick tour through the promotion, then head straight into the usual Adventurers' Inn.",
    heroPrimaryAction: "Open App",
    heroSecondaryAction: "Watch Demo",
    heroTertiaryAction: "Enter the Inn",
    heroJapaneseGuide: "Japanese Guide",
    heroEnglishGuide: "English / Other Languages",
    signalLabel: "Featured Tool",
    signalTitle: "GloranthaGIS",
    signalText:
      "Search places, measure distance, show ranges, and load PNG maps to share geography decisions quickly during play.",
    demoLabel: "Demo Movie",
    demoTitle: "Show the world in motion before the game begins.",
    demoLead:
      "A short video before the scroll makes it obvious what this app changes.",
    demoBody:
      "Even a quick watch shows how GloranthaGIS supports table decisions and live conversation.",
    demoAction: "Open on YouTube",
    featuresLabel: "What You Can Do",
    featuresTitle: "Turn a map from a static image into a play surface.",
    featuresLead:
      "GloranthaGIS transforms geographic information into something everyone at the table can read and act on.",
    feature1Title: "Place Jump",
    feature1Text: "Search place names in Japanese or English and jump to the location right away.",
    feature2Title: "Distance Measurement",
    feature2Text: "Draw routes and understand the distance between points with a grounded sense of scale.",
    feature3Title: "Range Circle",
    feature3Text: "Use radius tools to visualize travel range, territory, and effect areas.",
    feature4Title: "Layer View",
    feature4Text: "Load PNG maps and explore the world with zoom, drag, and layered viewing.",
    feature5Title: "Distance Origin Flag",
    feature5Text: "Place a blue reference flag and read north, south, east, and west distance from the screen center.",
    feature6Title: "Built For Play",
    feature6Text: "Using it during live sessions makes movement and geography feel immediately concrete.",
    howtoLabel: "How to Start",
    howtoTitle: "Get started in three steps.",
    howtoLead: "The first experience should feel intuitive, not technical.",
    step1Title: "Prepare the map",
    step1Text: "Get the high-resolution Dragon Pass or Prax map you want to use.",
    step2Title: "Load the PNG",
    step2Text: "Open GloranthaGIS and load the PNG file from the app interface.",
    step3Title: "Explore and play",
    step3Text: "Zoom, measure distances, compare routes, and use it directly during your session.",
    howtoGuideJa: "Full Guide (JP)",
    howtoGuideEn: "Full Guide (EN)",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Help visitors imagine the table moments first.",
    useCasesLead:
      "Go beyond feature lists and show scenes where this tool becomes useful in actual play.",
    useCase1Title: "Travel Planning",
    useCase1Text:
      "Share where the party is, where they are going, and what the journey really means.",
    useCase2Title: "Route Decisions",
    useCase2Text:
      "Compare roads, rivers, mountains, and distance side by side to choose a route together.",
    useCase3Title: "Range And Area",
    useCase3Text: "Understand territory, danger zones, and movement scale through circles and measured distance.",
    useCase4Title: "Session Immersion",
    useCase4Text: "The map stops being background art and becomes a tool that supports the conversation itself.",
    footerLabel: "RQ Adventurers' Inn",
    footerTitle: "Back to the related information",
    footerText:
      "GloranthaGIS is one part of the tools and outreach from RQ Adventurers' Inn. The rest of the related tools and information are available on the main site.",
    footerNote: "Company information is also available.",
    footerPrimaryAction: "Main Site",
    footerSecondaryAction: "Company",
    footerQrText: "You can also access it from the QR code"
  }
};

function applyLanguage(language) {
  const copy = translations[language] || translations.ja;

  document.documentElement.lang = language;
  pageTitleNode.textContent = copy.pageTitle;
  metaDescriptionNode.setAttribute("content", copy.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  if (languageSelect) {
    languageSelect.value = language;
  }

  localStorage.setItem("glorantha-gis-language", language);
}

const savedLanguage = localStorage.getItem("glorantha-gis-language");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
const initialLanguage = savedLanguage || browserLanguage || "ja";

applyLanguage(initialLanguage);

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
