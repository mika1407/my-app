import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      {/* Hero Section */}
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Framework</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-6xl">
          TanStack Start
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--sea-ink-soft)]">
          TanStack Start is a full-stack React framework powered by TanStack Router. 
          It gives you everything you need to build high-performance applications with 
          100% type-safety, from the URL to your database.
        </p>

        {/* Features List - Muutettu grid-cols-2 tai sm:grid-cols-4 jotta uusi kortti mahtuu */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[var(--line)] p-4">
            <h3 className="font-bold text-[var(--sea-ink)]">Full-Stack SSR</h3>
            <p className="text-sm text-[var(--sea-ink-soft)]">Seamless Server-Side Rendering out of the box.</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] p-4">
            <h3 className="font-bold text-[var(--sea-ink)]">Type-Safe</h3>
            <p className="text-sm text-[var(--sea-ink-soft)]">End-to-end type safety for routes and data fetching.</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] p-4">
            <h3 className="font-bold text-[var(--sea-ink)]">Modern Ecosystem</h3>
            <p className="text-sm text-[var(--sea-ink-soft)]">Built on the industry-leading TanStack tools.</p>
          </div>

          {/* UUSI KORTTI: Database Info */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/30 p-4">
            <h3 className="font-bold text-blue-700">Database Powered</h3>
            <p className="text-sm text-blue-600/80">
              Product data is fetched in real-time from a <strong>neon.tech</strong> PostgreSQL database.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}