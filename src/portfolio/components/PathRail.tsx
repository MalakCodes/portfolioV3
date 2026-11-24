import React from 'react'
import { motion } from 'framer-motion'
import { SECTIONS, type Content, type SectionId } from '../../shared/breakpoint/content'
import { EASE_OUT } from '../../shared/breakpoint/scroll'
import { BrandMark, Ph } from '../../shared/breakpoint/ui'

/**
 * Desktop path navigation — a debugger gutter.
 * Line numbers, a track, and a breakpoint node per section. The track fills with scroll progress.
 */
export function PathRail({ t, active, onNavigate }: { t: Content; active: SectionId; onNavigate: (id: SectionId) => void }) {
const activeIndex = SECTIONS.findIndex((section) => section.id === active)
const progress = (activeIndex + 0.5) / SECTIONS.length

  return (
    <aside className="sticky top-0 hidden h-screen flex-col border-e border-line lg:flex">
      <div className="px-7 pt-7">
        <BrandMark />
      </div>

      <nav aria-label={t.ui.path} className="flex flex-1 items-center px-5 xl:px-7">
        <ol className="relative w-full">
          {/* Track + progress — centred on the node column */}
          <motion.span
            aria-hidden
className="absolute start-[47.5px] top-0 bottom-0 w-px origin-top bg-line"            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.05, ease: EASE_OUT }}
          >
<motion.span
  className="absolute inset-0 origin-top bg-accent"
  animate={{ scaleY: progress }}
  transition={{
    duration: 0.35,
    ease: EASE_OUT,
  }}
  style={{
    boxShadow: '0 0 8px var(--bp-accent), 0 0 16px var(--bp-accent), 0 0 24px var(--bp-accent)',
  }}
/>          </motion.span>

          {SECTIONS.map((s, i) => {
  const isActive = s.id === active
  const isVisited = i < SECTIONS.findIndex((section) => section.id === active)
            return (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.1 + i * 0.04, ease: EASE_OUT }}
              >
                <button
                  type="button"
                  onClick={() => onNavigate(s.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group grid h-12 w-full grid-cols-[28px_16px_minmax(0,1fr)] items-center gap-x-3 rounded-lg text-start focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span
                    className={`font-mono text-[11px] tabular-nums transition-colors duration-150 ${isActive ? 'text-accent' : 'text-muted/70 group-hover:text-muted'}`}
                    dir="ltr"
                  >
                    L{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex size-4 items-center justify-center">
                    {isActive && (
                      <motion.span
                        layoutId="rail-active"
                        className="absolute inset-[-3px] rounded-full border border-accent"
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                      />
                    )}
<span
  className={`size-2.5 rounded-full border-2 transition-all duration-200 ${
    i <= SECTIONS.findIndex((section) => section.id === active)
      ? `border-accent bg-accent ${
          isActive
            ? 'bp-pulse'
            : 'shadow-[0_0_8px_var(--bp-accent),0_0_14px_var(--bp-accent)]'
        }`
      : 'border-line-strong bg-bg group-hover:scale-110 group-hover:border-accent'
  }`}
/>
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-mono text-[10px] tracking-wider transition-colors duration-150 ${isActive ? 'text-ink' : 'text-muted'}`}
                      dir="ltr"
                      style={{ textAlign: 'start' }}
                    >
                      {s.code}
                    </span>
                    <span
                      className={`block truncate text-sm transition-colors duration-150 ${isActive ? 'font-medium text-ink' : 'text-muted group-hover:text-ink-2'}`}
                    >
                      {t.nav[s.id]}
                    </span>
                  </span>
                </button>
              </motion.li>
            )
          })}
        </ol>
      </nav>

      <p className="px-7 pb-7 text-xs leading-relaxed text-muted">
        <Ph>{t.ui.legend}</Ph>
      </p>
    </aside>
  )
}
