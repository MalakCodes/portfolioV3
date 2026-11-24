
import { useState } from 'react'
import {
  ArrowUpRight,
  Copy,
  Check,
  Code2,
  BriefcaseBusiness,
} from 'lucide-react'
import type { Content } from '../../shared/breakpoint/content'

const email = 'malak.allotaibi@gmail.com'

export function Contact({ t }: { t: Content }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="bp-contact"
      className="border-t border-line py-24 sm:py-32"
    >
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent">
          ENDPOINT / 08
        </span>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t.contact.title}
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {t.contact.sub}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Email */}
        <div className="contact-card rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <span className="font-mono text-xs tracking-wider text-muted">
            EMAIL / 01
          </span>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <a
              href={`mailto:${email}`}
              className="break-all text-xl font-medium text-ink transition-colors hover:text-accent sm:text-2xl"
            >
              {email}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:bg-sunken"
              aria-label={copied ? t.contact.copied : t.contact.copy}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <Copy size={16} />
                  {t.contact.copy}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/MalakCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:bg-sunken"
          >
            <div className="min-w-0">
              <span className="font-mono text-xs tracking-wider text-muted">
                GITHUB / 02
              </span>

              <div className="mt-4 flex min-w-0 items-center gap-3 text-ink">
                <Code2 size={20} className="shrink-0" />
                <span className="min-w-0 break-all">
                  MalakCodes
                </span>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/malakalotaibi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:bg-sunken"
          >
            <div className="min-w-0">
              <span className="font-mono text-xs tracking-wider text-muted">
                LINKEDIN / 03
              </span>

              <div className="mt-4 flex min-w-0 items-center gap-3 text-ink">
                <BriefcaseBusiness size={20} className="shrink-0" />
                <span className="min-w-0 break-all">
                  Malak F.Alotaibi
                </span>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
