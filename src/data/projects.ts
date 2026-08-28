export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  repoUrl?: string;
  // 公開URLがあるWebアプリの場合に設定（おもてなし導線：デモサイトを開く）
  demoUrl?: string;
  // デモボタンの表示文言を上書きしたい場合に設定（例：Android版が本体のアプリのWeb版デモ）
  demoLabel?: string;
  guestAccount?: { email: string; password: string };
  // 公開URLがないAndroid/GASツールの場合に設定（おもてなし導線：デモ動画/GIFを見る）
  videoUrl?: string;
  // ココナラ等での販売実績がある場合に設定（おもてなし導線：出品ページ + 実績バッジ）
  coconala?: {
    url: string;
    status: "selling" | "planned";
    sales?: number;
    rating?: number;
  };
};

export const CATEGORIES = ["音楽・音声制作", "業務効率化・制作支援"] as const;

// ポートフォリオ資料（docx）が用意されている制作物のみを掲載
export const PROJECTS: Project[] = [
  // 音楽・音声制作
  {
    slug: "music-info-gas",
    title: "音楽情報更新GAS",
    description:
      "コード進行・ドラムパターン・メロディー・対旋律を音楽理論に基づいて自動生成するGoogle Apps Script。対旋律の不協和音回避やパターンの単調さ回避にこだわり、生成したCSVは対旋律MIDI生成編集ツールへそのまま引き渡せる、作曲パイプラインの起点。",
    stack: ["Google Apps Script"],
    category: "音楽・音声制作",
  },
  {
    slug: "senritsu-preview-player",
    title: "旋律プレビュープレーヤー",
    description:
      "主旋律と対旋律をブラウザ上で作成・編集できる音楽制作サポートアプリ。音楽情報更新GASが出力したCSVを取り込んで編集・再生でき、2声部間の音程差を自動判定して楽譜上に色付け表示。CSV/MIDIどちらでも書き出し可能。",
    stack: ["JavaScript", "Tone.js"],
    category: "音楽・音声制作",
  },
  {
    slug: "midi-gas-web",
    title: "midi-gas-web（CSV→MIDI変換ツール）",
    description:
      "音楽情報更新GASが生成した素材CSVと構成CSVを読み込み、ドラム・ベース・コード進行・旋律を自動で組み立てて、一曲フル分のマルチトラックMIDIを一括生成するFlaskアプリ。個別生成・複数曲まとめての一括生成の両方に対応。",
    stack: ["Python", "Flask", "mido"],
    category: "音楽・音声制作",
  },

  // 業務効率化・制作支援
  {
    slug: "priority-matrix-app",
    title: "優先度マトリクスアプリ",
    description:
      "「重要度」と「緊急度」の2軸でタスクを4象限に整理するアイゼンハワーマトリクス型アプリ（Capacitorでモバイル対応）。立体的な3Dデザインとリスト名⇔締切日のフリップアニメーションで、印象に残りやすいタスク管理を目指した。",
    stack: ["JavaScript", "Capacitor"],
    category: "業務効率化・制作支援",
    demoUrl: "https://claude.ai/code/artifact/daf5dff4-636e-4409-88fb-9f79d6bad771",
    demoLabel: "デモサイトを開く（ウェブ版）",
  },
  {
    slug: "multi-counter-app",
    title: "マルチカウンターアプリ",
    description:
      "グループ(ボード)ごとにカウンターをまとめて管理できるタスク管理アプリ（Capacitorでモバイル対応）。立体的な3Dデザイン、背景画像設定、ロック時のポップアニメーションで、使うたびに気持ちが前向きになる工夫を凝らした。",
    stack: ["JavaScript", "Capacitor"],
    category: "業務効率化・制作支援",
    demoUrl: "https://claude.ai/code/artifact/98314473-35a7-4109-9073-435353186c32",
    demoLabel: "デモサイトを開く（ウェブ版）",
  },
  {
    slug: "interval-timer",
    title: "インターバルタイマー",
    description:
      "作業と休憩など複数ステップを順番に進める時間管理を、音声通知で支援するデスクトップ向けインターバルタイマー。終了予定時刻を基準に残り時間を計算し直すことでズレを抑え、ステップ構成は「ルーティン」としてブラウザに自動保存され、前回の続きから作業できる。",
    stack: ["React", "TypeScript", "Vite"],
    category: "業務効率化・制作支援",
    demoUrl: "https://claude.ai/code/artifact/77e19ea7-d74b-4412-8f84-b2029d980274",
  },
];
