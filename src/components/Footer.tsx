export default function Footer() {
  return (
    <footer className="mt-0 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-text-primary font-serif font-bold text-xl">Clockworq.ai</span>
            <span className="text-sm text-text-secondary font-light">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-10">
            <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
              <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors">Pricing</a>
              <a href="#how" className="text-text-secondary hover:text-primary transition-colors">How it works</a>
              <a href="#cta" className="text-text-secondary hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
