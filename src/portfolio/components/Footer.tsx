import type { Content, SectionId } from '../../shared/breakpoint/content'

export function Footer({
  t,
  onNavigate,
}: {
  t: Content
  onNavigate: (id: SectionId) => void
}) {
  return <footer />
}