"use client";

export default function About() {
  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Ideas Shared", value: "50K+" },
    { label: "Community Members", value: "5K+" },
    { label: "Countries", value: "120+" },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Capture Ideas",
      description: "Never let a great idea slip away. Capture thoughts instantly and organize them effortlessly.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      ),
      title: "Organize & Curate",
      description: "Categorize, tag, and refine your ideas. Build a personal knowledge base that grows with you.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Share & Collaborate",
      description: "Share your ideas with the community, get feedback, and collaborate with like-minded thinkers.",
    },
  ];

  return (
    <>
      <style>{`
        :root,
        [data-theme="light"] {
          --ab-bg:            var(--bg-surface);
          --ab-border:        rgba(0,0,0,0.06);
          --ab-accent-line:   var(--color-brand-red);
          --ab-heading:       var(--color-dark-900);
          --ab-subtitle:      rgba(15,15,20,0.50);
          --ab-text:          rgba(15,15,20,0.55);
          --ab-stat-value:    var(--color-dark-900);
          --ab-stat-label:    rgba(15,15,20,0.45);
          --ab-card-bg:       #FFFFFF;
          --ab-card-border:   rgba(0,0,0,0.07);
          --ab-card-hover-border: var(--color-brand-red);
          --ab-card-shadow:   0 4px 20px rgba(0,0,0,0.06);
          --ab-card-icon:     var(--color-brand-red);
          --ab-card-icon-bg:  color-mix(in srgb, var(--color-brand-red) 10%, transparent);
          --ab-card-title:    var(--color-dark-900);
          --ab-card-text:     rgba(15,15,20,0.50);
          --ab-divider:       rgba(0,0,0,0.06);
          --ab-quote-text:    rgba(15,15,20,0.40);
          --ab-quote-border:  var(--color-brand-red);
        }

        [data-theme="dark"] {
          --ab-bg:            rgba(10,10,15,0.40);
          --ab-border:        rgba(255,255,255,0.05);
          --ab-accent-line:   var(--color-brand-red-soft);
          --ab-heading:       #ffffff;
          --ab-subtitle:      rgba(255,255,255,0.40);
          --ab-text:          rgba(255,255,255,0.45);
          --ab-stat-value:    #ffffff;
          --ab-stat-label:    rgba(255,255,255,0.38);
          --ab-card-bg:       rgba(20,10,12,0.60);
          --ab-card-border:   rgba(255,255,255,0.06);
          --ab-card-hover-border: var(--color-brand-red-soft);
          --ab-card-shadow:   0 4px 24px rgba(0,0,0,0.25);
          --ab-card-icon:     var(--color-brand-red-soft);
          --ab-card-icon-bg:  color-mix(in srgb, var(--color-brand-red) 14%, transparent);
          --ab-card-title:    #ffffff;
          --ab-card-text:     rgba(255,255,255,0.42);
          --ab-divider:       rgba(255,255,255,0.06);
          --ab-quote-text:    rgba(255,255,255,0.35);
          --ab-quote-border:  var(--color-brand-red-soft);
        }
        .about-section {
          background: var(--ab-bg);
          border-top: 1px solid var(--ab-border);
          border-bottom: 1px solid var(--ab-border);
          font-family: var(--font-body);
          transition: background 0.3s, border-color 0.3s;
        }
        .about-inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--space-20) var(--container-pad) var(--space-16);
        }
        .about-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto var(--space-16);
        }
        .about-accent-line {
          width: 48px;
          height: 3px;
          background: var(--ab-accent-line);
          border-radius: 2px;
          margin: 0 auto var(--space-6);
          transition: background 0.3s;
        }
        .about-heading {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          color: var(--ab-heading);
          letter-spacing: var(--tracking-tight);
          line-height: var(--leading-tight);
          margin-bottom: var(--space-4);
          transition: color 0.3s;
        }
        .about-heading span {
          color: var(--ab-accent-line);
          transition: color 0.3s;
        }
        .about-subtitle {
          font-size: var(--text-md);
          color: var(--ab-subtitle);
          line-height: var(--leading-normal);
          transition: color 0.3s;
        }
        .about-story {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
          align-items: center;
          margin-bottom: var(--space-16);
        }
        @media (min-width: 768px) {
          .about-story {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-16);
          }
        }
        .about-story-text p {
          font-size: var(--text-base);
          color: var(--ab-text);
          line-height: var(--leading-loose);
          margin-bottom: var(--space-4);
          transition: color 0.3s;
        }
        .about-story-text p:last-child {
          margin-bottom: 0;
        }
        .about-story-visual {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          padding: var(--space-8);
          background: var(--ab-card-bg);
          border: 1px solid var(--ab-card-border);
          border-radius: var(--radius-lg);
          transition: background 0.3s, border-color 0.3s;
        }

        .about-quote {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--ab-heading);
          line-height: var(--leading-snug);
          letter-spacing: var(--tracking-tight);
          padding-left: var(--space-5);
          border-left: 3px solid var(--ab-quote-border);
          transition: color 0.3s, border-color 0.3s;
        }

        .about-quote-attribution {
          font-size: var(--text-sm);
          color: var(--ab-quote-text);
          font-weight: 500;
          transition: color 0.3s;
        }

        /* --- Stats grid --- */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-16);
        }

        @media (min-width: 640px) {
          .about-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-6);
          }
        }

        .about-stat {
          text-align: center;
          padding: var(--space-6) var(--space-4);
          background: var(--ab-card-bg);
          border: 1px solid var(--ab-card-border);
          border-radius: var(--radius-md);
          transition: background 0.3s, border-color 0.3s, transform 0.2s var(--ease-spring);
        }

        .about-stat:hover {
          border-color: var(--ab-card-hover-border);
          transform: translateY(-3px);
        }
        .about-stat-value {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: var(--text-2xl);
          color: var(--ab-stat-value);
          line-height: 1;
          margin-bottom: var(--space-2);
          transition: color 0.3s;
        }
        .about-stat-label {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--ab-stat-label);
          letter-spacing: var(--tracking-wider);
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .about-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        @media (min-width: 640px) {
          .about-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .about-features {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .about-feature-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-8) var(--space-6);
          background: var(--ab-card-bg);
          border: 1px solid var(--ab-card-border);
          border-radius: var(--radius-lg);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.2s var(--ease-spring);
        }
        .about-feature-card:hover {
          border-color: var(--ab-card-hover-border);
          box-shadow: var(--ab-card-shadow);
          transform: translateY(-4px);
        }
        .about-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--ab-card-icon-bg);
          color: var(--ab-card-icon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, color 0.3s;
        }

        .about-feature-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-lg);
          color: var(--ab-card-title);
          letter-spacing: var(--tracking-tight);
          transition: color 0.3s;
        }

        .about-feature-desc {
          font-size: var(--text-sm);
          color: var(--ab-card-text);
          line-height: var(--leading-normal);
          transition: color 0.3s;
        }

        /* --- Divider --- */
        .about-divider {
          height: 1px;
          background: var(--ab-divider);
          margin: var(--space-10) 0 var(--space-6);
          transition: background 0.3s;
        }
      `}</style>

      <section className="about-section">
        <div className="about-inner">
          <div className="about-header">
            <div className="about-accent-line" />
            <h2 className="about-heading">
              About <span>IdeaVault</span>
            </h2>
            <p className="about-subtitle">
              We believe every great innovation starts with a single idea. 
              Our mission is to provide a space where ideas are captured, 
              nurtured, and transformed into reality.
            </p>
          </div>

          <div className="about-story">
            <div className="about-story-text">
              <p>
                IdeaVault was born from a simple observation: brilliant ideas 
                are often lost because there's no dedicated space to capture 
                and develop them. We set out to change that.
              </p>
              <p>
                What started as a personal project quickly grew into a vibrant 
                community of thinkers, creators, and innovators. Today, 
                IdeaVault serves thousands of users worldwide, helping them 
                organize their thoughts, collaborate with others, and turn 
                inspiration into action.
              </p>
              <p>
                Whether you're an entrepreneur brainstorming your next 
                venture, a writer developing a story, or simply someone who 
                loves to explore new ideas &mdash; IdeaVault is your home.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-quote">
                &ldquo;The best way to have a good idea is to have a lot of ideas.&rdquo;
              </div>
              <div className="about-quote-attribution">
                &mdash; Linus Pauling
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-features">
            {features.map((feature) => (
              <div key={feature.title} className="about-feature-card">
                <div className="about-feature-icon">{feature.icon}</div>
                <div className="about-feature-title">{feature.title}</div>
                <div className="about-feature-desc">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
