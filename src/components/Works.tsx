import Link from "next/link";
import FadeIn from "./FadeIn";
import { CATEGORIES, PROJECTS, type Project } from "@/data/projects";

// 「おもてなし導線」ボタン群。公開URL・デモ動画・ココナラ実績の有無に応じて出し分ける。
function ProjectCTAs({ project }: { project: Project }) {
  const hasCTA =
    project.demoUrl || project.videoUrl || project.repoUrl || project.coconala;
  if (!hasCTA) return null;

  return (
    <div className="mt-1 flex flex-col gap-2">
      {project.coconala ? (
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-2">
          {project.coconala.status === "selling"
            ? `ココナラ販売実績 ${project.coconala.sales ?? 0}件${
                project.coconala.rating ? ` ・★${project.coconala.rating.toFixed(1)}` : ""
              }`
            : "ココナラ出品予定"}
        </span>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
          >
            {project.demoLabel ?? "デモサイトを開く"}
          </a>
        ) : project.videoUrl ? (
          <a
            href={project.videoUrl}
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
          >
            1分デモ動画を見る
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-accent"
          >
            GitHubで詳細を見る
          </a>
        ) : null}
        {project.coconala ? (
          <a
            href={project.coconala.url}
            className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-accent"
          >
            ココナラ出品ページを見る
          </a>
        ) : null}
      </div>

      {project.demoUrl && project.guestAccount ? (
        <p className="text-xs text-muted">
          ゲストログイン: {project.guestAccount.email} / {project.guestAccount.password}
        </p>
      ) : null}
      {!project.demoUrl && project.videoUrl ? (
        <p className="text-xs text-muted">インストール不要でご確認いただけます</p>
      ) : null}
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <article className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent">
        <h4 className="text-base font-bold leading-snug">{project.title}</h4>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2 pt-1">
          <ProjectCTAs project={project} />
          <Link
            href={`/works/${project.slug}`}
            className="w-fit text-xs font-semibold text-accent-2 transition-colors hover:text-accent"
          >
            詳しく見る（README）→
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}

export default function Works() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn>
        <p className="font-mono text-sm text-accent-2">Works</p>
        <h2 className="section-heading mt-3">制作実績</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          これまでに個人開発したツール・アプリの一覧です。音楽/音声制作の自動化から、日々の作業を効率化する業務ツールまで、幅広く手を動かしてきました。
        </p>
        <p className="mt-2 max-w-2xl text-xs text-muted">
          TODO: 各アプリを公開したら src/data/projects.ts に demoUrl（公開URL）/ guestAccount（ゲストログイン）/
          videoUrl（デモ動画・GIFのURL）/ coconala（出品リンクと実績）を追記してください。設定すると自動でカードに「デモサイトを開く」「1分デモ動画を見る」「ココナラ出品ページを見る」ボタンが表示されます。
        </p>
      </FadeIn>

      {CATEGORIES.map((category, categoryIndex) => {
        const projects = PROJECTS.filter((p) => p.category === category);
        if (projects.length === 0) return null;

        return (
          <div key={category} className="mt-16">
            <FadeIn>
              <h3 className="text-lg font-bold">
                {category}
                <span className="ml-2 font-mono text-sm font-normal text-muted">
                  ({projects.length})
                </span>
              </h3>
            </FadeIn>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={0.04 * (i % 6) + categoryIndex * 0.02}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
