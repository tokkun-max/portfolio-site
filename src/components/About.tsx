import FadeIn from "./FadeIn";

type ProfileItem = {
  label: string;
  body: string;
};

// 必須5要素（自己紹介作成ガイドより）: 経歴・スキル・実績・人柄・自己PR
const CORE_ITEMS: ProfileItem[] = [
  {
    label: "クリエイターとしての経歴",
    body: "TODO: いつから開発を始めたか、これまで何を作り、どう学習・開発してきたかを記載してください。",
  },
  {
    label: "具体的な保有スキル",
    body: "TODO: 「〇〇が使える」ではなく、そのスキルで具体的に何ができるかを書いてください。習熟度も添えると伝わりやすいです。",
  },
  {
    label: "受賞歴・実績",
    body: "TODO: 客観的に評価された実績があれば箇条書きで簡潔に記載してください（なければこのカードは削除して構いません）。",
  },
  {
    label: "仕事に活きる趣味・特技",
    body: "TODO: 人柄が伝わる趣味・特技と、技術書を読む習慣など日々のインプット姿勢を記載してください。",
  },
  {
    label: "強みを発揮したエピソード（自己PR）",
    body: "TODO: 課題解決力・協調性など開発スキル以外の強みを、具体的なエピソードとともに記載してください。",
  },
];

// エンジニアならではの+αのアピール要素
const EXTRA_ITEMS: ProfileItem[] = [
  {
    label: "学習・努力の姿勢",
    body: "TODO: 新しい技術をどう伸ばしているか、最新情報をどこから得ているか（技術ブログ・Qiita・Zenn等）を記載してください。",
  },
  {
    label: "目指すエンジニア像",
    body: "TODO: システムエンジニア、特定領域のスペシャリストなど、将来のキャリア像を明確に記載してください。",
  },
  {
    label: "開発のきっかけ（原体験）",
    body: "TODO: なぜそのサービスを作ろうと思ったのか、開発への熱量が伝わる原体験を記載してください。",
  },
];

function ProfileCard({ item, delay }: { item: ProfileItem; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
        <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
      </div>
    </FadeIn>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn>
        <p className="font-mono text-sm text-accent-2">About</p>
        <h2 className="section-heading mt-3">自己紹介</h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-6 max-w-2xl text-muted leading-relaxed">
        <p>
          TODO: 世界観が伝わるキャッチコピーを1文（25〜40文字程度）で記載してください。
          作品の雰囲気とデザインのトーンを合わせると印象に残りやすくなります。
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_ITEMS.map((item, i) => (
          <ProfileCard key={item.label} item={item} delay={0.05 * i} />
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-16">
        <p className="font-mono text-xs text-accent-2">+ α</p>
        <h3 className="mt-2 text-lg font-bold">エンジニアとしてのアピール</h3>
      </FadeIn>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {EXTRA_ITEMS.map((item, i) => (
          <ProfileCard key={item.label} item={item} delay={0.05 * i} />
        ))}
      </div>
    </section>
  );
}
