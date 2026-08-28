import FadeIn from "./FadeIn";

type SkillGroup = {
  name: string;
  capability: string;
};

// 「技術名の羅列」ではなく「その技術で何を構築できるか」を伝える構成（ホーム画面設計ガイドより）。
// app配下の実装実績（Flask/GAS/Next.js/RVC等の各プロジェクト）を根拠に記載。TODO: 習熟度や言葉遣いはご自身の言葉に調整してください。
const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Python / Flask",
    capability:
      "MVC構成のWebアプリを設計・実装できます。歌声変換（RVC）や音声合成（VOICEVOX）などAIモデルをFlaskアプリに組み込み、ユーザーがブラウザから操作できる形にする実装経験があります。",
  },
  {
    name: "Google Apps Script",
    capability:
      "Gmail/スプレッドシート/Gemini APIなどと連携する業務自動化ツールを構築できます。定型作業を自動化し、1日数時間かかっていた手作業を数クリックにまで削減した実績があります。",
  },
  {
    name: "TypeScript / React / Next.js",
    capability:
      "App Router構成のNext.jsアプリをTailwind CSSとFramer Motionで実装できます。本ポートフォリオサイト自体もこの構成で構築しています。",
  },
  {
    name: "SQLite / データ永続化",
    capability:
      "楽曲・歌詞データなど構造化データをSQLiteで永続化し、CRUD処理を含むアプリを設計できます。",
  },
  {
    name: "AI/生成AI連携（VOICEVOX・RVC・Stable Diffusion・Gemini）",
    capability:
      "音声合成・歌声変換・画像生成・LLMなどの生成AIモデルをアプリに組み込み、実用的なツールとして仕上げる実装経験があります。",
  },
  {
    name: "Capacitor（モバイル対応）",
    capability:
      "WebアプリをCapacitorでラップし、Android実機で動作するアプリとして配布できます。",
  },
];

function SkillCard({ skill, delay }: { skill: SkillGroup; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
        <h3 className="font-mono text-sm font-bold text-accent-2">{skill.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{skill.capability}</p>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn>
        <p className="font-mono text-sm text-accent-2">Technical Skills</p>
        <h2 className="section-heading mt-3">スキルセット</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          技術名の一覧ではなく、それぞれの技術で「実際に何を作れるか」を制作実績に基づいて紹介します。
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={0.05 * i} />
        ))}
      </div>
    </section>
  );
}
