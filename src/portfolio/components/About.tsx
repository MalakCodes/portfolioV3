
import React from 'react'
import { Download } from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import { Button, Ph, Reveal, Section, SectionHeader } from '../../shared/breakpoint/ui'

export function About({ t }: { t: Content }) {
  return (
    <Section id="about">
      <SectionHeader code="WHOAMI" line={2} title={t.sections.about.title} sub={t.sections.about.sub} />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[28px]">
            <Ph>{t.about.lead}</Ph>
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
            {t.about.body.map((p) => (
              <p key={p}>
                <Ph>{p}</Ph>
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="border-t border-line">
            {t.about.facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-line py-4">
                <dt className="text-sm text-muted">{f.k}</dt>
                <dd className="text-[15px] text-ink">
                  <Ph>{f.v}</Ph>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/CV/Malak-Alotaibi-CV.pdf"
            download="Malak-Alotaibi-CV.pdf"
            className="inline-block mt-6"
          >
            <Button variant="secondary" icon={Download}>
              {t.about.cv}
              <span className="font-mono text-xs text-muted">{t.about.cvMeta}</span>
            </Button>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
