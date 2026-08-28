import FadeIn from "./FadeIn";

const INDEX_ITEMS = [
  { href: "#about", label: "自己紹介", en: "ABOUT ME" },
  { href: "#skills", label: "スキルセット", en: "TECHNICAL SKILLS" },
  { href: "#works", label: "制作実績", en: "WORKS & PRODUCTS" },
  { href: "#activities", label: "技術発信", en: "ACTIVITIES & BLOG" },
  { href: "#contact", label: "お問い合わせ", en: "CONTACT" },
];

// 面接官の確認コストを削減するクイック目次。1クリックで各セクションへジャンプできる。
export default function QuickIndex() {
  return (
    <section aria-label="目次" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <FadeIn>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {INDEX_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <span className="font-mono text-xs text-accent-2 group-hover:text-accent">
                    {item.en}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
