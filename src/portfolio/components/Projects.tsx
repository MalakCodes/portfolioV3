
import React from 'react'
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderOpen,
  ImageIcon,
} from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import {
  EmptyState,
  ImagePh,
  Ph,
  Reveal,
  Section,
  SectionHeader,
  Tag,
} from '../../shared/breakpoint/ui'

export function Projects({ t, empty }: { t: Content; empty: boolean }) {
  const p = t.projects

  return (
    <Section id="projects">
      <SectionHeader
        code="BUILD"
        line={3}
        title={t.sections.projects.title}
        sub={t.sections.projects.sub}
      />

      {empty ? (
        <EmptyState
          icon={FolderOpen}
          title={p.emptyTitle}
          body={p.emptyBody}
        />
      ) : (
        <div className="space-y-6">

          {/* Featured Project: STEPIN */}
          <Reveal as="article">
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="grid gap-2 p-3 sm:grid-cols-2">
                {p.featured.images.map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={image.alt}
                    className="group overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                ))}
              </div>

              <div className="project-card-content flex flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <Tag mono core>{p.featuredLabel}</Tag>
                  <span className="font-mono text-xs text-muted">
                    <Ph>{p.featured.year}</Ph>
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
                  <Ph>{p.featured.title}</Ph>
                </h3>

                <p className="mt-3 text-base text-ink-2">
                  <Ph>{p.featured.summary}</Ph>
                </p>

                <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-muted">
                  <Ph>{p.featured.desc}</Ph>
                </p>

                <p className="mt-4 text-sm text-muted">
                  <Ph>{p.featured.role}</Ph>
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.featured.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {p.featured.sourceUrl && (
                  <div className="mt-7">
                    <a
                      href={p.featured.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:text-accent"
                    >
                      <Code2 className="size-4" />
                      {p.source}
                      <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Other Projects */}
          <div className="grid gap-5 md:grid-cols-2">
            {p.items.map((project, index) => (
              <Reveal
                key={project.title}
                as="article"
                delay={index * 0.05}
                className="h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-3">

                  {/* Project Images */}
                  {project.images.length > 0 ? (
                    <div className={`grid gap-2 overflow-hidden rounded-2xl ${
                      project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}>
                      {project.images.map((image) => (
                        <a
                          key={image.src}
                          href={image.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group overflow-hidden rounded-xl"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <ImagePh
                      icon={ImageIcon}
                      label={project.title}
                      hint="16:10"
                      className="aspect-[16/10] w-full rounded-2xl"
                    />
                  )}

                  <div className="project-card-content flex flex-1 flex-col px-3 pb-3 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-tight text-ink">
                        <Ph>{project.title}</Ph>
                      </h3>

                      <span className="shrink-0 font-mono text-xs text-muted">
                        <Ph>{project.year}</Ph>
                      </span>
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      <Ph>{project.summary}</Ph>
                    </p>

                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
                      <Ph>{project.desc}</Ph>
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        <Code2 className="size-4" />
                        {p.source}
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
