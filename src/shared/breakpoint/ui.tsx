import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import type { LucideIcon } from 'lucide-react'

import { EASE_OUT, useScrollRoot } from './scroll'

/* ───────────── Placeholder text ─────────────
   Dashed underline = "replace me". Used for every piece of personal content. */
export function Ph({ children, className, strong }: { children: React.ReactNode; className?: string; strong?: boolean }) {
  return (
    <span
      className={twMerge(
        'underline decoration-dashed decoration-1 underline-offset-[0.22em]',
        strong ? 'decoration-accent' : 'decoration-line-strong',
        className
      )}
    >
      {children}
    </span>
  )
}

/* ───────────── Breakpoint dot ───────────── */
export function Dot({ active, size = 10, className }: { active?: boolean; size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={twMerge(
        'inline-block shrink-0 rounded-full border-2 transition-[background-color,border-color] duration-150',
        active ? 'border-accent bg-accent' : 'border-line-strong bg-bg',
        className
      )}
    />
  )
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={twMerge('inline-flex items-center gap-2', className)} dir="ltr">
      <span className="relative flex size-4 items-center justify-center">
        <span className="size-3 rounded-full bg-accent" />
      </span>
<span className="brand-mark-text font-mono text-[15px] font-semibold tracking-tight text-ink">
  breakpoint
</span>    </span>
  )
}

/* ───────────── Buttons ───────────── */
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  icon?: LucideIcon
  iconEnd?: LucideIcon
  href?: string
  className?: string
  children?: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export function Button({ variant = 'primary', size = 'md', icon: Icon, iconEnd: IconEnd, href, className, children, ...rest }: ButtonProps) {
  const cls = twMerge(
    'group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium',
    'transition-[background-color,color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50',
    size === 'md' ? 'h-11 px-5 text-[15px]' : 'h-9 px-4 text-sm',
    variant === 'primary' && 'bg-ink text-bg hover:bg-accent hover:text-accent-ink',
    variant === 'secondary' && 'border border-line-strong bg-transparent text-ink hover:border-ink',
    variant === 'ghost' && 'px-3 text-ink-2 hover:bg-sunken hover:text-ink',
    className
  )
  const inner = (
    <>
      {Icon && <Icon className="size-4" strokeWidth={2} />}
      {children}
      {IconEnd && (
        <IconEnd className="size-4 transition-transform duration-150 group-hover/btn:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/btn:-translate-x-0.5" strokeWidth={2} />
      )}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} onClick={(e) => e.preventDefault()}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}

/* ───────────── Tags ───────────── */
export function Tag({ children, core, mono, className }: { children: React.ReactNode; core?: boolean; mono?: boolean; className?: string }) {
  return (
    <span
      className={twMerge(
        'inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-md border px-2.5 text-[13px]',
        core ? 'border-line-strong bg-surface text-ink' : 'border-line bg-transparent text-ink-2',
        mono && 'font-mono text-[12px]',
        className
      )}
    >
      {core && <span className="size-1.5 rounded-full bg-accent" aria-hidden />}
      {children}
    </span>
  )
}

/* ───────────── Section header ─────────────
   ● CODE ─────────────── 04
   Title
   Subtitle                                       */
export function SectionHeader({
  code,
  line,
  title,
  sub,
  action,
}: {
  code: string
  line: number
  title: string
  sub?: string
  action?: React.ReactNode
}) {
  const root = useScrollRoot()
  return (
    <div className="mb-10 sm:mb-12">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs text-muted">
        <Dot active size={9} />
        <span className="font-medium tracking-wider text-ink" dir="ltr">
          {code}
        </span>
        <motion.span
          aria-hidden
          className="h-px flex-1 origin-left bg-line rtl:origin-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ root, once: true, amount: 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        />
        <span dir="ltr">L{String(line).padStart(2, '0')}</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="min-w-0 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {sub && <p className="mt-3 text-base leading-relaxed text-muted sm:text-[17px]">{sub}</p>}
        </div>
        {action}
      </div>
    </div>
  )
}

/* ───────────── Reveal ───────────── */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  y = 14,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article'
  y?: number
}) {
  const root = useScrollRoot()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root, once: true, amount: 0.15 }}
      transition={{ duration: 0.28, delay, ease: EASE_OUT }}
    >
      {children}
    </Comp>
  )
}

/* ───────────── Section wrapper ───────────── */
export function Section({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={`bp-${id}`} className={twMerge('border-t border-line py-20 sm:py-24 lg:py-28', className)}>
      {children}
    </section>
  )
}

/* ───────────── Empty state ───────────── */
export function EmptyState({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong px-6 py-14 text-center">
      <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-sunken text-muted">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <p className="text-base font-medium text-ink">{title}</p>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{body}</p>
    </div>
  )
}

/* ───────────── Image placeholder ───────────── */
export function ImagePh({
  icon: Icon,
  label,
  hint,
  className,
  children,
}: {
  icon: LucideIcon
  label: string
  hint?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={twMerge('bp-ph relative flex flex-col items-center justify-center gap-2 overflow-hidden text-muted', className)}>
      <Icon className="size-6" strokeWidth={1.5} />
      <span className="text-[13px] font-medium">{label}</span>
      {hint && (
        <span className="font-mono text-[11px] opacity-80" dir="ltr">
          {hint}
        </span>
      )}
      {children}
    </div>
  )
}
