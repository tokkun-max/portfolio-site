import FadeIn from "./FadeIn";

const LINKS = [{ label: "Gmail", href: "mailto:tokuato2@gmail.com" }];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <p className="font-mono text-sm text-accent-2">Contact</p>
          <h2 className="section-heading mt-3">お問い合わせ</h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            TODO: 一言メッセージ（面談のご連絡お待ちしています、等）をここに記載してください。
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </FadeIn>

        <p className="mt-16 text-xs text-muted">
          © {new Date().getFullYear()} 徳里貴之. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
