
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

import type { Content } from '../../shared/breakpoint/content'
import { EASE_OUT } from '../../shared/breakpoint/scroll'
import { Ph } from '../../shared/breakpoint/ui'

export type RecommendationLetter = {
  image: string
  name: string
  title: string
  relation: string
}

export function Lightbox({
  t,
  dir,
  index,
  letters,
  onClose,
  onChange,
}: {
  t: Content
  dir: 'ltr' | 'rtl'
  index: number | null
  letters: RecommendationLetter[]
  onClose: () => void
  onChange: (i: number) => void
}) {
  const r = t.recommendations
  const [zoom, setZoom] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null
  const letter = index !== null ? letters[index] : null

  const go = (delta: number) => {
    if (index === null) return
    onChange((index + delta + letters.length) % letters.length)
    setZoom(false)
  }

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(dir === 'rtl' ? -1 : 1)
      if (e.key === 'ArrowLeft') go(dir === 'rtl' ? 1 : -1)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, dir])

  useEffect(() => {
    if (!open) setZoom(false)
  }, [open])

  const Prev = dir === 'rtl' ? ChevronRight : ChevronLeft
  const Next = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <AnimatePresence>
      {open && letter && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={r.preview}
          className="fixed inset-0 z-50 flex flex-col bg-overlay backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          onClick={onClose}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <p
                className="font-mono text-xs text-white/60"
                dir="ltr"
                style={{ textAlign: 'start' }}
              >
                REFS · {index! + 1} {r.of} {letters.length}
              </p>
              <p className="truncate text-sm font-medium">
                <Ph className="decoration-white/40">
                  {letter.name}
                </Ph>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <IconBtn
                label={zoom ? r.zoomOut : r.zoomIn}
                onClick={() => setZoom((z) => !z)}
              >
                {zoom
                  ? <ZoomOut className="size-[18px]" />
                  : <ZoomIn className="size-[18px]" />}
              </IconBtn>

              <a
                href={letter.image}
                download
                aria-label={r.download}
                title={r.download}
                onClick={(e) => e.stopPropagation()}
                className="flex size-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <Download className="size-[18px]" />
              </a>

              <IconBtn
                label={r.close}
                onClick={onClose}
                btnRef={closeRef}
              >
                <X className="size-5" />
              </IconBtn>
            </div>
          </div>

          {/* Letter image */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className={`h-full max-h-full overflow-auto rounded-lg ${
                zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={(e) => {
                e.stopPropagation()
                setZoom((z) => !z)
              }}
            >
              <img
                src={letter.image}
                alt={`${r.letter} - ${letter.name}`}
                className="mx-auto block h-full w-auto max-w-none rounded-lg object-contain"
                style={{
                  height: zoom ? '160%' : '100%',
                }}
              />
            </motion.div>

            {letters.length > 1 && (
              <>
                <NavBtn
                  label={r.prev}
                  className="start-2 sm:start-6"
                  onClick={() => go(-1)}
                >
                  <Prev className="size-5" />
                </NavBtn>

                <NavBtn
                  label={r.next}
                  className="end-2 sm:end-6"
                  onClick={() => go(1)}
                >
                  <Next className="size-5" />
                </NavBtn>
              </>
            )}
          </div>

          {/* Pager */}
          <div
            className="flex justify-center gap-2 pb-5"
            onClick={(e) => e.stopPropagation()}
          >
            {letters.map((item, i) => (
              <button
                key={item.image}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => {
                  onChange(i)
                  setZoom(false)
                }}
                className="flex size-6 items-center justify-center rounded-full"
              >
                <span
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                    i === index
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function IconBtn({
  label,
  onClick,
  children,
  btnRef,
}: {
  label: string
  onClick?: () => void
  children: React.ReactNode
  btnRef?: React.Ref<HTMLButtonElement>
}) {
  return (
    <button
      ref={btnRef}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex size-10 items-center justify-center rounded-full text-white/80 transition-[background-color,color] duration-150 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
    >
      {children}
    </button>
  )
}

function NavBtn({
  label,
  onClick,
  className,
  children,
}: {
  label: string
  onClick: () => void
  className: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={`absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-[background-color,transform] duration-150 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-white ${className}`}
    >
      {children}
    </button>
  )
}
