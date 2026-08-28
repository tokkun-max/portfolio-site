import FadeIn from "./FadeIn";

type Article = {
  title: string;
  url: string;
  source: "Zenn" | "Qiita";
  date: string;
};

// TODO: Zenn/Qiitaの投稿が増えたらここに追記してください（RSS連携に切り替える場合は
// Zennなら https://zenn.dev/{username}/feed 、Qiitaなら Qiita API v2 の /api/v2/users/{user_id}/items を利用できます）。
const ARTICLES: Article[] = [];

export default function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn>
        <p className="font-mono text-sm text-accent-2">Activities & Blog</p>
        <h2 className="section-heading mt-3">技術発信履歴</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Zenn・Qiitaでの発信履歴です。日々の学習をアウトプットし、技術コミュニティへ継続的に貢献しています。
        </p>
      </FadeIn>

      {ARTICLES.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <FadeIn key={article.url} delay={0.05 * i}>
              <a
                href={article.url}
                className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-accent-2">
                    {article.source}
                  </span>
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="text-sm font-bold leading-relaxed">{article.title}</h3>
              </a>
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn delay={0.1} className="mt-10 rounded-2xl border-2 border-dashed border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">
            TODO: Zenn・Qiitaの投稿URLをsrc/components/Activities.tsxのARTICLES配列に追加してください。
          </p>
        </FadeIn>
      )}
    </section>
  );
}
