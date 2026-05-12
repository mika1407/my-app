import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 py-3 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo vasemmalla */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold text-[var(--sea-ink)]">Logo</h1>
        </Link>

        {/* Navigaatio oikealla */}
        <nav className="flex gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition-colors [&.active]:text-[var(--sea-ink)] [&.active]:font-bold"
          >
            Homepage
          </Link>
          <Link 
            to="/products" 
            className="text-sm font-medium text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition-colors [&.active]:text-[var(--sea-ink)] [&.active]:font-bold"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition-colors [&.active]:text-[var(--sea-ink)] [&.active]:font-bold"
          >
            About
          </Link>
        </nav>

      </div>
    </header>
  )
}
