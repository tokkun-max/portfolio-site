import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { PROJECT_DETAILS } from "@/data/projectDetails";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS[slug];
  if (!detail) return {};
  return {
    title: `${detail.title} | Portfolio`,
    description: detail.sections[0]?.paragraphs[0] ?? detail.title,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS[slug];
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!detail || !project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <FadeIn>
        <Link
          href="/#works"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          ← 制作実績一覧に戻る
        </Link>

        <p className="mt-8 font-mono text-sm text-accent-2">{detail.subtitle}</p>
        <h1 className="section-heading mt-3">{detail.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>

      {detail.demoVideo ? (
        <FadeIn delay={0.05} className="mt-8">
          <div
            className={
              detail.demoVideo.vertical
                ? "mx-auto aspect-[9/16] max-w-[360px] overflow-hidden rounded-xl border border-border"
                : "aspect-video w-full overflow-hidden rounded-xl border border-border"
            }
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${detail.demoVideo.youtubeId}`}
              title={detail.demoVideo.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p className="mt-2 text-xs text-muted">{detail.demoVideo.caption}</p>
        </FadeIn>
      ) : null}

      <div className="mt-14 flex flex-col gap-12">
        {detail.sections.map((section, i) => (
          <FadeIn key={section.heading} delay={0.03 * i}>
            <h2 className="text-lg font-bold text-foreground">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-16 border-t border-border pt-8">
        <Link
          href="/#works"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          ← 制作実績一覧に戻る
        </Link>
      </FadeIn>
    </main>
  );
}
