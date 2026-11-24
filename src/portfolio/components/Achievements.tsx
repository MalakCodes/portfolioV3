
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Users,
  BriefcaseBusiness,
  Trophy,
} from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import { EASE_OUT } from '../../shared/breakpoint/scroll'
import { Ph, Reveal, Section, SectionHeader } from '../../shared/breakpoint/ui'

type Tab = 'all' | 'certificates' | 'community' | 'awards'

const TABS: Tab[] = ['all', 'certificates', 'community', 'awards']

// Certificate images in the same order as content.ts
const CERTIFICATE_IMAGES = [
  '/certificates/fundamental-ai-concepts.png',
  '/certificates/ibm-ai-fundamentals.png',
  '/certificates/fundamentals-machine-learning.png',
  '/certificates/google-ai-bootcamp-2024.png',
  '/certificates/journey-to-ai-world-bootcamp.png',
]

export function Achievements({ t }: { t: Content }) {
  const [tab, setTab] = useState<Tab>('all')
  const a = t.achievements

  const show = (category: Exclude<Tab, 'all'>) =>
    tab === 'all' || tab === category

  return (
    <Section id="achievements">
      <SectionHeader
        code="RELEASE"
        line={6}
        title={t.sections.achievements.title}
        sub={t.sections.achievements.sub}
      />

      <div
        role="tablist"
        aria-label={a.tabs.label}
        className="bp-no-scrollbar -mx-5 mb-10 flex overflow-x-auto px-5 sm:mx-0 sm:px-0"
      >
        <div className="achievement-tabs flex gap-1 rounded-full border border-line bg-surface p-1">
          {TABS.map((id) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`relative h-9 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent ${
                tab === id ? 'text-bg' : 'text-muted hover:text-ink'
              }`}
            >
              {tab === id && (
                <motion.span
                  layoutId="ach-tab"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                />
              )}
              <span className="relative">{a.tabs[id]}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        className="space-y-14"
      >
        {/* Awards & Achievements */}
        {show('awards') && (
          <Group title={a.tabs.awards} count={a.awards.length}>
<div className="mx-auto w-full max-w-md">              {a.awards.map ((item, i) => (
                
                <Reveal
                  key={item.title}
                  as="article"
                  delay={i * 0.05}
                  className="h-full"
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} award image`}
                      className="group block overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="max-h-[520px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </a>

                    <div className="p-5 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                          <Trophy className="size-4" />
                          <Ph>{item.achievement}</Ph>
                        </span>

                        <span className="font-mono text-xs text-muted">
                          <Ph>{item.date}</Ph>
                        </span>
                      </div>

                      <h4 className="mt-5 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                        <Ph>{item.title}</Ph>
                      </h4>

                      <p className="mt-2 text-sm font-medium text-accent">
                        <Ph>{item.organization}</Ph>
                      </p>

                      <p className="mt-4 text-[15px] leading-relaxed text-muted">
                        <Ph>{item.description}</Ph>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Group>
        )}

        {/* Certificates */}
        {show('certificates') && (
          <Group title={a.tabs.certificates} count={a.certificates.length}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {a.certificates.map((cert, i) => {
                const image = CERTIFICATE_IMAGES[i]

                return (
                  <Reveal
                    key={cert.title}
                    as="article"
                    delay={i * 0.05}
                    className="h-full"
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-3">
                      <a
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${cert.title} certificate`}
                        className="group block aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface"
                      >
                        <img
                          src={image}
                          alt={cert.title}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </a>

                      <div className="achievement-card-content flex flex-1 flex-col px-2 pb-1 pt-4">
                        <h4 className="font-semibold leading-snug text-ink">
                          <Ph>{cert.title}</Ph>
                        </h4>

                        <p className="mt-2 text-sm text-muted">
                          <Ph>{cert.issuer}</Ph>
                        </p>

                        <div className="mt-auto border-t border-line pt-4">
                          <p className="font-mono text-xs text-muted">
                            <Ph>{cert.date}</Ph>
                          </p>

                          {cert.verifyUrl && (
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-ink transition-colors hover:text-accent"
                            >
                              {a.verify}
                              <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px rtl:-scale-x-100" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </Group>
        )}

        {/* Community & Leadership */}
        {show('community') && (
          <Group title={a.tabs.community} count={a.community.length}>
            <div className="grid gap-5 md:grid-cols-2">
              {a.community.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="article"
                  delay={i * 0.05}
                  className="h-full"
                >
                  <div className="flex h-full gap-5 rounded-2xl border border-line bg-surface p-5 sm:p-6">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      {i === 0 ? (
                        <BriefcaseBusiness
                          className="size-5"
                          strokeWidth={1.75}
                        />
                      ) : (
                        <Users
                          className="size-5"
                          strokeWidth={1.75}
                        />
                      )}
                    </span>

                    <div className="achievement-card-content flex min-w-0 flex-1 flex-col">
                      <h4 className="text-lg font-semibold leading-snug text-ink">
                        <Ph>{item.title}</Ph>
                      </h4>

                      <p className="mt-1.5 text-sm font-medium text-accent">
                        <Ph>{item.organization}</Ph>
                      </p>

                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        <Ph>{item.description}</Ph>
                      </p>

                      <p className="mt-auto pt-5 font-mono text-xs text-muted">
                        <Ph>{item.date}</Ph>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Group>
        )}
      </motion.div>
    </Section>
  )
}

function Group({
  title,
  count,
  children,
}: {
  title: string
  count: number
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="mb-5 flex items-baseline gap-2 text-lg font-semibold text-ink">
        {title}
        <span className="font-mono text-xs font-normal text-muted">
          {count}
        </span>
      </h3>
      {children}
    </div>
  )
}
