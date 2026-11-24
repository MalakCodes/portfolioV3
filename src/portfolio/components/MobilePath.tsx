import React from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

import { SECTIONS, type Content, type SectionId } from '../../shared/breakpoint/content'
import { EASE_OUT, useScrollRoot } from '../../shared/breakpoint/scroll'

/**
 * Phone & tablet path navigation — the same gutter, turned sideways and docked to the thumb zone.
 */
export function MobilePath({
  t,
  active,
  onNavigate,
  dir,
}: {
  t: Content
  active: SectionId
  onNavigate: (id: SectionId) => void
  dir: 'ltr' | 'rtl'
}) {
  const root = useScrollRoot()
  const { scrollYProgress } = useScroll({ container: root })
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.4 })
  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0]

  return (
    <motion.nav
      aria-label={t.ui.path}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 0.25, ease: EASE_OUT }}
className="hidden"    >
      <div className="relative h-9 w-[104px] shrink-0 overflow-hidden sm:w-36">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: EASE_OUT }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <span className="font-mono text-[10px] tracking-wider text-accent" dir="ltr" style={{ textAlign: 'start' }}>
              {current.code}
            </span>
            <span className="truncate text-sm font-medium text-ink">{t.nav[current.id]}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <ol className="relative flex min-w-0 flex-1 items-center justify-between">
        <span aria-hidden className="absolute inset-x-[11px] top-1/2 h-px -translate-y-1/2 bg-line">
          <motion.span className="absolute inset-0 bg-accent" style={{ scaleX: progress, originX: dir === 'rtl' ? 1 : 0 }} />
        </span>
        {SECTIONS.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id} className="relative">
              <button
                type="button"
                onClick={() => onNavigate(s.id)}
                aria-label={t.nav[s.id]}
                aria-current={isActive ? 'true' : undefined}
                className="flex size-[22px] items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-accent"
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-active"
                    className="absolute inset-0 rounded-full border border-accent"
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                  />
                )}
                <span
                  className={`size-2.5 rounded-full border-2 transition-[background-color,border-color] duration-150 ${
                    isActive ? 'border-accent bg-accent' : 'border-line-strong bg-surface'
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ol>
    </motion.nav>
  )
}
