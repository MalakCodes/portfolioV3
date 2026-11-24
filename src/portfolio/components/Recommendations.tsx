
import React, { useState } from 'react'
import { Eye, Mail } from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import {
  EmptyState,
  Ph,
  Reveal,
  Section,
  SectionHeader,
} from '../../shared/breakpoint/ui'
import { Lightbox, type RecommendationLetter } from './Lightbox'

const LETTERS_EN: RecommendationLetter[] = [
  {
    image: '/recommendations/raghda-alqurashi.png',
    name: 'Dr. Raghda Alqurashi',
    title: 'Assistant Professor · Computer Science Department',
    relation: 'Jamoum University College · Umm Al-Qura University',
  },
  {
    image: '/recommendations/hamdah-abdullah-alotaibi.png',
    name: 'Dr. Hamdah Abdullah Alotaibi',
    title: 'Lecturer · Department of Computer Science',
    relation: 'Umm Al-Qura University',
  },
]

const LETTERS_AR: RecommendationLetter[] = [
  {
    image: '/recommendations/raghda-alqurashi.png',
    name: 'د.رغداء القرشي',
    title: 'أستاذ مساعد · قسم علوم الحاسب',
    relation: 'الكلية الجامعية بالجموم · جامعة أم القرى',
  },
  {
    image: '/recommendations/hamdah-abdullah-alotaibi.png',
    name: 'د. حمدة عبدالله العتيبي',
    title: 'محاضر · قسم علوم الحاسب',
    relation: 'جامعة أم القرى',
  },
]

export function Recommendations({
  t,
  empty,
  dir,
}: {
  t: Content
  empty: boolean
  dir: 'ltr' | 'rtl'
}) {
  const [open, setOpen] = useState<number | null>(null)
  const r = t.recommendations

  const letters = dir === 'rtl' ? LETTERS_AR : LETTERS_EN

  return (
    <Section id="recommendations">
      <SectionHeader
        code="REFS"
        line={7}
        title={t.sections.recommendations.title}
        sub={t.sections.recommendations.sub}
      />

      {empty ? (
        <EmptyState
          icon={Mail}
          title={r.emptyTitle}
          body={r.emptyBody}
        />
      ) : (
        <ul className="bp-no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0">
          {letters.map((letter, i) => (
            <Reveal
              key={letter.image}
              as="li"
              delay={i * 0.05}
              className="w-[65%] max-w-[280px] shrink-0 snap-start sm:w-auto sm:max-w-[320px]"
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${r.preview} ${letter.name}`}
                className="group block w-full text-start focus-visible:outline-none"
              >
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-2.5 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1 group-hover:border-line-strong group-hover:shadow-[0_12px_32px_rgb(0_0_0/0.08)] group-focus-visible:outline-2 group-focus-visible:outline-accent group-active:translate-y-0">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface">
                    <img
                      src={letter.image}
                      alt={`${r.letter} - ${letter.name}`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <span
                    className="absolute end-5 top-5 font-mono text-[11px] text-muted"
                    dir="ltr"
                  >
                    {i + 1}/{letters.length}
                  </span>

                  <span className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
                    <span className="recommendation-preview flex translate-y-1 items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-sm font-medium text-bg opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <Eye className="size-4" />
                      {r.preview}
                    </span>
                  </span>
                </div>

                <div className="px-1 pt-4">
                  <p className="font-medium text-ink">
                    <Ph>{letter.name}</Ph>
                  </p>

                  <p className="mt-1 text-sm text-ink-2">
                    <Ph>{letter.title}</Ph>
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    <Ph>{letter.relation}</Ph>
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      )}

      <Lightbox
        t={t}
        dir={dir}
        index={open}
        letters={letters}
        onClose={() => setOpen(null)}
        onChange={setOpen}
      />
    </Section>
  )
}
