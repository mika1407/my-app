export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="text-sm tracking-wide">
          &copy; {year} <span className="font-semibold text-[var(--sea-ink)]">Mika Tiihonen</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
