
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

import type { Content, SectionId } from '../../shared/breakpoint/content'
import { EASE_OUT } from '../../shared/breakpoint/scroll'
import { Button, Ph } from '../../shared/breakpoint/ui'

/**
 * INIT — the opening screen.
 */
export function Hero({
  t,
  onNavigate,
}: {
  t: Content
  onNavigate: (id: SectionId) => void
}) {
  const rise = (i: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.28,
      delay: 0.12 + i * 0.06,
      ease: EASE_OUT,
    },
  })

  return (
    <section id="bp-init" className="pb-20 pt-8 sm:pt-14 lg:pb-28 lg:pt-16">
      <div className="mx-auto w-full max-w-5xl">

        {/* Text column */}
        <div className="relative min-w-0 ps-8">

          {/* Timeline line */}
          <motion.span
            aria-hidden
            className="absolute start-[7px] top-2 bottom-5 w-px origin-top bg-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.05, ease: EASE_OUT }}
          />

          {/* Location */}
          <motion.p
            {...rise(0)}
            className="mb-8 flex items-center gap-1.5 text-sm text-muted"
          >
            <MapPin className="size-3.5" />
            <Ph>{t.hero.location}</Ph>
          </motion.p>

          {/* Availability status */}
          <motion.p
            {...rise(1)}
            className="relative flex items-center gap-2 text-sm text-muted"
          >
            <GutterDot />
            <span className="size-1.5 rounded-full bg-muted" aria-hidden />
            <Ph>{t.hero.status}</Ph>
          </motion.p>

          {/* Greeting */}
          <motion.p
            {...rise(2)}
            className="mt-8 text-lg text-muted sm:text-xl"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Animated name */}
          <motion.h1
            {...rise(3)}
            className="relative mt-2 text-[44px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            <GutterDot hit />

            <Ph strong>
              <TypewriterName text={t.hero.name} />
            </Ph>

            <span
              aria-hidden="true"
              className="ms-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-accent"
            />
          </motion.h1>

          {/* Role */}
          <motion.p
            {...rise(4)}
            className="mt-4 max-w-4xl text-xl text-ink-2 sm:text-2xl"
          >
            <Ph>{t.hero.role}</Ph>
          </motion.p>

          {/* Introduction */}
          <motion.p
            {...rise(5)}
            className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg"
          >
            <Ph>{t.hero.intro}</Ph>
          </motion.p>

          {/* Actions */}
          <motion.div
            {...rise(6)}
            className="relative mt-10 flex flex-wrap items-center gap-3"
          >
            <GutterDot />

            <Button
              iconEnd={ArrowRight}
              className="hero-primary-button"
              onClick={() => onNavigate('projects')}
            >
              {t.hero.primary}
            </Button>

            <Button
              variant="secondary"
              onClick={() => onNavigate('contact')}
            >
              {t.hero.secondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* Typewriter effect */
function TypewriterName({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')

    const characters = Array.from(text)
    let index = 0

    const timer = window.setInterval(() => {
      index++
      setDisplayed(characters.slice(0, index).join(''))

      if (index >= characters.length) {
        window.clearInterval(timer)
      }
    }, 150)

    return () => window.clearInterval(timer)
  }, [text])

  return <span>{displayed}</span>
}

/* Gutter node */
function GutterDot({ hit }: { hit?: boolean }) {
  return (
    <span
      aria-hidden
      className="absolute start-[-30px] top-1/2 flex size-2.5 -translate-y-1/2 items-center justify-center"
    >
      {hit && (
        <motion.span
          className="absolute inset-0 rounded-full bg-accent"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5, ease: EASE_OUT }}
        />
      )}

      <span
        className={`size-2.5 rounded-full border-2 ${
          hit
            ? 'border-accent bg-accent'
            : 'border-line-strong bg-bg'
        }`}
      />
    </span>
  )
}
