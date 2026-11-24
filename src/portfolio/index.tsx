import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MotionConfig, motion, useAnimationControls } from 'framer-motion'

import { CONTENT, SECTIONS, type Lang, type SectionId, type Theme } from '../shared/breakpoint/content'
import { ScrollRootContext } from '../shared/breakpoint/scroll'

import { PathRail } from './components/PathRail'
import { MobilePath } from './components/MobilePath'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Experience } from './components/Experience'
import { Achievements } from './components/Achievements'
import { Recommendations } from './components/Recommendations'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

type Props = Partial<typeof args> & {
  onThemeChange?: (theme: Theme) => void
  onLangChange?: (lang: Lang) => void
}

export default function PortfolioPage(props: Props) {
  const { theme: themeArg, lang: langArg, content, onThemeChange, onLangChange } = { ...args, ...props }
  const [theme, setTheme] = useState<Theme>(themeArg as Theme)
  const [lang, setLang] = useState<Lang>(langArg as Lang)
  const [theming, setTheming] = useState(false)
  const [active, setActive] = useState<SectionId>('init')
const scrollRef = useRef<HTMLDivElement | null>(null)
  const swap = useAnimationControls()

  useEffect(() => setTheme(themeArg as Theme), [themeArg])
  useEffect(() => setLang(langArg as Lang), [langArg])

  const t = CONTENT[lang]
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const empty = content === 'empty'

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheming(true)
    setTheme(next)
    onThemeChange?.(next)
    window.setTimeout(() => setTheming(false), 260)
  }

  const toggleLang = async () => {
    const next: Lang = lang === 'en' ? 'ar' : 'en'
    await swap.start({ opacity: 0, transition: { duration: 0.12, ease: [0.23, 1, 0.32, 1] } })
    setLang(next)
    onLangChange?.(next)
    swap.start({ opacity: 1, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } })
  }

  const navigate = useCallback((id: SectionId) => {
    const root = scrollRef.current
    const el = root?.querySelector<HTMLElement>(`#bp-${id}`)
    if (!root || !el) return
    root.scrollTo({ top: el.offsetTop - (window.innerWidth < 1024 ? 64 : 0) })
  }, [])

  // Which section is under the reading line
  useEffect(() => {
    const root = scrollRef.current
    if (!root) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace('bp-', '') as SectionId)
        })
      },
      { root, rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach((s) => {
      const el = root.querySelector(`#bp-${s.id}`)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollRootContext.Provider value={scrollRef}>
        <div
          data-theme={theme}
          data-theming={theming ? 'true' : 'false'}
          lang={lang}
          dir={dir}
className="h-screen bg-[var(--bp-bg)] font-sans !text-[var(--bp-ink)]"        >
          <div ref={scrollRef} className="bp-scroll relative h-full overflow-y-auto overflow-x-hidden">
            <motion.div animate={swap} className="lg:grid lg:grid-cols-[232px_minmax(0,1fr)] xl:grid-cols-[264px_minmax(0,1fr)]">
              <PathRail t={t} active={active} onNavigate={navigate} />
              <div className="min-w-0">
                <TopBar t={t} theme={theme} lang={lang} onToggleTheme={toggleTheme} onToggleLang={toggleLang} onNavigate={navigate} />
                <main className="mx-auto w-full max-w-[1040px] px-5 pb-32 sm:px-8 lg:px-12 lg:pb-16">
                  <Hero t={t} onNavigate={navigate} />
                  <About t={t} />
                  <Projects t={t} empty={empty} />
                  <Stack t={t} empty={empty} />
                  <Experience t={t} empty={empty} />
                  <Achievements t={t} empty={empty} />
                  <Recommendations t={t} empty={empty} dir={dir} />
                  <Contact t={t} />
                </main>
                <Footer t={t} onNavigate={navigate} />
              </div>
            </motion.div>
            <MobilePath t={t} active={active} onNavigate={navigate} dir={dir} />
          </div>
        </div>
      </ScrollRootContext.Provider>
    </MotionConfig>
  )
}

export const args = {
  theme: 'light',
  lang: 'en',
  content: 'placeholders',
}

export const argTypes = {
  theme: { control: 'radio', options: ['light', 'dark'] },
  lang: { control: 'radio', options: ['en', 'ar'] },
  content: { control: 'radio', options: ['placeholders', 'empty'] },
}
