export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-black">Clockworq.ai</span>
            <span className="text-sm text-slate-400">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#pricing" className="text-slate-300 hover:text-white">Pricing</a>
              <a href="#how" className="text-slate-300 hover:text-white">How it works</a>
              <a href="#cta" className="text-slate-300 hover:text-white">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-400 hover:text-white"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                className="text-slate-400 hover:text-white"
                title="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5A3.4 3.4 0 0 1 13.9 6h2.7v3h-2c-.8 0-1.6.4-1.6 1.6V12H17l-.5 3h-2.2v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white"
                title="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c3.038 0 5.5 2.462 5.5 5.5V21h-4v-6.5a1.5 1.5 0 1 0-3 0V21h-4V9h4v1.6A4.98 4.98 0 0 1 14.5 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

