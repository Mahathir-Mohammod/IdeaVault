"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        :root,
        [data-theme="light"] {
          --ft-bg:            var(--bg-surface);
          --ft-border:        rgba(0,0,0,0.07);
          --ft-heading:       var(--color-dark-900);
          --ft-link:          rgba(15,15,20,0.55);
          --ft-link-hover:    var(--color-brand-red);
          --ft-text:          rgba(15,15,20,0.50);
          --ft-icon-color:    rgba(15,15,20,0.40);
          --ft-icon-hover:    var(--color-brand-red);
          --ft-icon-bg-hover: color-mix(in srgb, var(--color-brand-red) 10%, transparent);
          --ft-divider:       rgba(0,0,0,0.07);
          --ft-copyright:     rgba(15,15,20,0.40);
          --ft-logo-text:     var(--color-dark-900);
          --ft-logo-accent:   var(--color-brand-red);
        }
        [data-theme="dark"] {
          --ft-bg:            rgba(10,10,15,0.60);
          --ft-border:        rgba(255,255,255,0.06);
          --ft-heading:       #ffffff;
          --ft-link:          rgba(255,255,255,0.50);
          --ft-link-hover:    var(--color-brand-red-soft);
          --ft-text:          rgba(255,255,255,0.40);
          --ft-icon-color:    rgba(255,255,255,0.38);
          --ft-icon-hover:    var(--color-brand-red-soft);
          --ft-icon-bg-hover: color-mix(in srgb, var(--color-brand-red) 14%, transparent);
          --ft-divider:       rgba(255,255,255,0.07);
          --ft-copyright:     rgba(255,255,255,0.35);
          --ft-logo-text:     #ffffff;
          --ft-logo-accent:   var(--color-brand-red-soft);
        }
        .footer {
          background: var(--ft-bg);
          border-top: 1px solid var(--ft-border);
          font-family: var(--font-body);
          transition: background 0.3s, border-color 0.3s;
          margin-top: auto;
        }
        .footer-inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--space-16) var(--container-pad) var(--space-8);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.2fr;
          }
        }
        .ft-brand {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .ft-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .ft-logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--color-brand-red);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ft-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--ft-logo-text);
          letter-spacing: -0.025em;
          transition: color 0.3s;
        }
        .ft-logo-text span {
          color: var(--ft-logo-accent);
          transition: color 0.3s;
        }
        .ft-description {
          font-size: var(--text-sm);
          color: var(--ft-text);
          line-height: var(--leading-normal);
          max-width: 320px;
          transition: color 0.3s;
        }
        .ft-col-heading {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-sm);
          color: var(--ft-heading);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: var(--space-4);
          transition: color 0.3s;
        }
        .ft-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .ft-link {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--ft-link);
          text-decoration: none;
          transition: color 0.18s ease;
          width: fit-content;
        }
        .ft-link:hover {
          color: var(--ft-link-hover);
        }
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .ft-contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-sm);
          color: var(--ft-text);
          transition: color 0.3s;
        }
        .ft-contact-item svg {
          flex-shrink: 0;
          opacity: 0.7;
        }
        .ft-contact-item a {
          color: var(--ft-link);
          text-decoration: none;
          transition: color 0.18s ease;
        }
        .ft-contact-item a:hover {
          color: var(--ft-link-hover);
        }
        .ft-social-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-top: var(--space-2);
        }
        .ft-social-link {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ft-icon-color);
          background: transparent;
          border: 1px solid var(--ft-divider);
          text-decoration: none;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .ft-social-link:hover {
          color: var(--ft-icon-hover);
          background: var(--ft-icon-bg-hover);
          border-color: transparent;
          transform: translateY(-2px);
        }
        .ft-divider {
          height: 1px;
          background: var(--ft-divider);
          margin: var(--space-10) 0 var(--space-6);
          transition: background 0.3s;
        }
        /* ─── Bottom bar ─── */
        .ft-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          text-align: center;
        }
        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        .ft-copyright {
          font-size: var(--text-xs);
          color: var(--ft-copyright);
          font-weight: 500;
          transition: color 0.3s;
        }
        .ft-legal-links {
          display: flex;
          gap: var(--space-5);
        }
        .ft-legal-link {
          font-size: var(--text-xs);
          color: var(--ft-copyright);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.18s ease;
        }
        .ft-legal-link:hover {
          color: var(--ft-link-hover);
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="ft-brand">
              <Link href="/" className="ft-logo">
                <div className="ft-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="ft-logo-text">
                  Idea<span>Vault</span>
                </span>
              </Link>
              <p className="ft-description">
                A platform to capture, organize, and share your brightest ideas. 
                Turn inspiration into innovation.
              </p>
              <div className="ft-social-row">
                <a
                  href="https://www.facebook.com/m.mahathir.381712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/Mahathir-Mohammod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahathir-mohammod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/MahathirXI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                  aria-label="X (formerly Twitter)"
                  title="X (formerly Twitter)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="ft-col-heading">Platform</h4>
              <div className="ft-links">
                <Link href="/" className="ft-link">Home</Link>
                <Link href="/ideas" className="ft-link">Ideas</Link>
                <Link href="/add-idea" className="ft-link">Add Idea</Link>
                <Link href="/my-ideas" className="ft-link">My Ideas</Link>
                <Link href="/categories" className="ft-link">Categories</Link>
              </div>
            </div>

            <div>
              <h4 className="ft-col-heading">Support</h4>
              <div className="ft-links">
                <Link href="#" className="ft-link">About Us</Link>
                <Link href="#" className="ft-link">FAQ</Link>
                <Link href="#" className="ft-link">Privacy Policy</Link>
                <Link href="#" className="ft-link">Terms of Service</Link>
                <Link href="#" className="ft-link">Contact Us</Link>
              </div>
            </div>

            <div>
              <h4 className="ft-col-heading">Contact</h4>
              <div className="ft-contact-list">
                <div className="ft-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                  <a href="mailto:mahathirmohammod88@gmail.com">
                    mahathirmohammod88@gmail.com
                  </a>
                </div>
                <div className="ft-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ft-divider" />

          <div className="ft-bottom">
            <span className="ft-copyright">
              &copy; {currentYear} IdeaVault. All rights reserved.
            </span>
            <div className="ft-legal-links">
              <Link href="#" className="ft-legal-link">Privacy</Link>
              <Link href="#" className="ft-legal-link">Terms</Link>
              <Link href="#" className="ft-legal-link">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
