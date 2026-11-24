
import React, { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import {
  GraduationCap,
  History,
  MapPin,
} from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import { EASE_OUT, useScrollRoot } from '../../shared/breakpoint/scroll'
import { EmptyState, Ph, Reveal, Section, SectionHeader, Tag } from '../../shared/breakpoint/ui'

export function Experience({ t, empty }: { t: Content; empty: boolean }) {
  const root = useScrollRoot()
  const listRef = useRef<HTMLOListElement>(null)

  const { scrollYProgress } = useScroll({
    container: root,
    target: listRef,
    offset: ['start 70%', 'end 55%'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.4,
  })

  const x = t.experience

  const ref = useRef<HTMLLIElement>(null)
  const reached = useInView(ref, {
    root,
    once: true,
    margin: '0px 0px -45% 0px',
  })

  return (
    <Section id="experience">
      <SectionHeader
        code="TRACE"
        line={5}
        title={t.sections.experience.title}
        sub={t.sections.experience.sub}
      />

      {empty ? (
        <EmptyState
          icon={History}
          title={x.emptyTitle}
          body={x.emptyBody}
        />
      ) : (
        <ol ref={listRef} className="relative">
          {/* Timeline line */}
          <span
            aria-hidden
            className="absolute start-[11.5px] top-3 bottom-3 w-px bg-line md:start-[203.5px]"
          >
            <motion.span
              className="absolute inset-0 origin-top bg-accent"
              style={{
                scaleY: progress,
                boxShadow:
                  '0 0 8px var(--bp-accent), 0 0 16px var(--bp-accent), 0 0 24px var(--bp-accent)',
              }}
            />
          </span>

          <li
            ref={ref}
            className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-x-5 pb-12 last:pb-0 md:grid-cols-[172px_24px_minmax(0,1fr)]"
          >
            {/* Date */}
            <div className="hidden pt-0.5 text-end md:block">
              <p
                className="font-mono text-xs leading-5 text-muted"
                dir="ltr"
                style={{ textAlign: 'end' }}
              >
                <Ph>{x.date}</Ph>
              </p>
            </div>

            {/* Timeline node */}
            <div className="relative flex justify-center pt-1">
              <motion.span
                aria-hidden
                className="relative z-10 flex size-3 items-center justify-center rounded-full border-2"
                initial={false}
                animate={{
                  backgroundColor: reached
                    ? 'var(--bp-accent)'
                    : 'var(--bp-bg)',
                  borderColor: reached
                    ? 'var(--bp-accent)'
                    : 'var(--bp-line-strong)',
                  boxShadow: reached
                    ? '0 0 6px var(--bp-accent), 0 0 12px var(--bp-accent), 0 0 20px var(--bp-accent)'
                    : 'none',
                }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              />
            </div>

            {/* Experience details */}
            <Reveal className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <Tag mono>
                  <GraduationCap
                    className="size-3.5"
                    strokeWidth={1.75}
                  />
                  <Ph>{x.kinds.internship}</Ph>
                </Tag>

                <span
                  className="font-mono text-xs text-muted md:hidden"
                  dir="ltr"
                >
                  <Ph>{x.date}</Ph>
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                <Ph>{x.role}</Ph>
              </h3>

              <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[15px] text-ink-2">
                <Ph>{x.org}</Ph>
                <span className="text-line-strong">·</span>
                <span className="flex items-center gap-1 text-sm text-muted">
                  <MapPin className="size-3.5" />
                  <Ph>{x.place}</Ph>
                </span>
              </p>

              <div className="mt-4 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted">
                <Ph>{x.desc}</Ph>
              </div>
            </Reveal>
          </li>
        </ol>
      )}
    </Section>
  )
}
