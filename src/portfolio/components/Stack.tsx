
import React from 'react'
import { motion } from 'framer-motion'
import {
  Blocks,
  Braces,
  Cpu,
  Layers,
  Wrench,
  Database,
  Users,
  type LucideIcon,
} from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import { EASE_OUT, useScrollRoot } from '../../shared/breakpoint/scroll'
import {
  EmptyState,
  Reveal,
  Section,
  SectionHeader,
  Tag,
} from '../../shared/breakpoint/ui'

const GROUP_ICONS: Record<string, LucideIcon> = {
  languages: Braces,
  frameworks: Layers,
  tools: Wrench,
  technologies: Cpu,
}

/** STACK — category rows separated by hairlines, tags flowing on the wide side. */
export function Stack({ t, empty }: { t: Content; empty: boolean }) {
  const root = useScrollRoot()

  return (
    <Section id="stack">
      <SectionHeader
        code="STACK"
        line={4}
        title={t.sections.stack.title}
        sub={t.sections.stack.sub}
      />

      {empty ? (
        <EmptyState
          icon={Blocks}
          title={t.stack.emptyTitle}
          body={t.stack.emptyBody}
        />
      ) : (
        <div className="border-t border-line">
          {t.stack.groups.map((g, gi) => {
            const Icon = GROUP_ICONS[g.key] ?? Blocks
            const skills = g.items ?? []
            const coreCount = g.coreCount ?? 0

            return (
              <Reveal key={g.key} delay={gi * 0.04}>
                <div className="grid gap-5 border-b border-line py-7 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">

                  {/* Category */}
                  <div className="flex items-start gap-3.5">
                    <span className="stack-icon-box flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-ink">
                      <Icon
                        className="size-[18px]"
                        strokeWidth={1.75}
                      />
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-medium text-ink">
                        {g.title}
                      </h3>

                      <p className="mt-0.5 text-sm text-muted">
                        {g.hint}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <ul className="flex flex-wrap content-start gap-2">
                    {skills.map((skill, i) => {
                      const isCore = i < coreCount

                      return (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ root, once: true }}
                          transition={{
                            duration: 0.22,
                            delay: 0.08 + i * 0.035,
                            ease: EASE_OUT,
                          }}
                        >
                          <Tag
                            core={isCore}
                            className={`h-8 px-3 text-sm ${
                              isCore ? 'text-black' : ''
                            }`}
                          >
                            {skill}
                          </Tag>
                        </motion.li>
                      )
                    })}
                  </ul>

                </div>
              </Reveal>
            )
          })}
        </div>
      )}
    </Section>
  )
}
