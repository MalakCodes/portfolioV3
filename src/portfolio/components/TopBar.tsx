
import React, { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

import type { Content, Lang, SectionId, Theme } from '../../shared/breakpoint/content'
import { EASE_OUT, useScrollRoot } from '../../shared/breakpoint/scroll'
import { BrandMark } from '../../shared/breakpoint/ui'

export function TopBar({
  t,
  theme,
  lang,
  onToggleTheme,
  onToggleLang,
  onNavigate,
}: {
  t: Content
  theme: Theme
  lang: Lang
  onToggleTheme: () => void
  onToggleLang: () => void
  onNavigate: (id: SectionId) => void
}) {
  // متابعة التمرير داخل حاوية الموقع
  const root = useScrollRoot()
  const { scrollY } = useScroll({ container: root })

  const lastScrollY = useRef(0)
  const [headerVisible, setHeaderVisible] = useState(true)

  // إخفاء الهيدر عند النزول وإظهاره عند الصعود
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const difference = latest - lastScrollY.current

    if (latest < 40) {
      setHeaderVisible(true)
    } else if (difference > 2) {
      setHeaderVisible(false)
    } else if (difference < -2) {
      setHeaderVisible(true)
    }

    lastScrollY.current = latest
  })

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: headerVisible ? 0 : '-100%',
        opacity: headerVisible ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md lg:border-transparent lg:bg-transparent lg:backdrop-blur-none"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1040px] items-center justify-between gap-4 px-5 sm:px-8 lg:justify-end lg:px-12">
        <button
          type="button"
          onClick={() => onNavigate('init')}
          className="rounded-md lg:hidden"
          aria-label={t.ui.backToTop}
        >
          <BrandMark />
        </button>

        <div className="flex items-center gap-2 rounded-full lg:border lg:border-line lg:bg-surface/80 lg:p-1 lg:backdrop-blur-md">
          <LangToggle t={t} lang={lang} onToggle={onToggleLang} />
          <ThemeToggle t={t} theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </motion.header>
  )
}

/** زر التبديل بين الإنجليزية والعربية */
function LangToggle({
  t,
  lang,
  onToggle,
}: {
  t: Content
  lang: Lang
  onToggle: () => void
}) {
  const options: { id: Lang; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'ar', label: 'ع' },
  ]

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={t.ui.switchLang}
      className="relative flex h-9 items-center rounded-full border border-line bg-sunken p-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:border-transparent"
      dir="ltr"
    >
      {options.map((o) => (
        <span
          key={o.id}
          className="relative flex h-8 w-10 items-center justify-center"
        >
          {lang === o.id && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 rounded-full bg-surface shadow-[0_1px_2px_rgb(0_0_0/0.12)]"
              transition={{ duration: 0.22, ease: EASE_OUT }}
            />
          )}

          <span
            className={`relative text-[13px] font-semibold text-black transition-colors duration-150 ${
              o.id === 'ar'
                ? 'font-[family-name:var(--font-arabic)] text-[15px]'
                : 'font-mono'
            }`}
          >
            {o.label}
          </span>
        </span>
      ))}
    </button>
  )
}

/** زر التبديل بين الوضع الفاتح والداكن */
function ThemeToggle({
  t,
  theme,
  onToggle,
}: {
  t: Content
  theme: Theme
  onToggle: () => void
}) {
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={onToggle}
      aria-label={dark ? t.ui.switchThemeBack : t.ui.switchTheme}
      className={`flex h-9 w-[68px] items-center rounded-full border border-line bg-sunken p-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:border-transparent ${
        dark ? 'justify-end' : 'justify-start'
      }`}
      dir="ltr"
    >
      <motion.span
        layout
        transition={{ duration: 0.22, ease: EASE_OUT }}
        className="flex size-8 items-center justify-center rounded-full bg-surface text-ink shadow-[0_1px_2px_rgb(0_0_0/0.12)]"
      >
        {dark ? (
<Moon className="size-4 text-black" strokeWidth={2} />        ) : (
          <Sun className="size-4" strokeWidth={2} />
        )}
      </motion.span>
    </button>
  )
}
