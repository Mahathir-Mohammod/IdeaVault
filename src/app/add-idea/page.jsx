"use client";

import { useState, useRef, useEffect } from "react";

const CATEGORIES = [
  "FinTech", "HealthTech", "EdTech", "CleanTech", "AI / ML",
  "Web3 / Crypto", "SaaS", "E-Commerce", "Social", "Other",
];

function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-5) var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-1)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          fontWeight: "var(--fw-extrabold)",
          color: "var(--text-primary)",
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        {count.toLocaleString()}{end >= 1000 ? "+" : ""}
      </span>
      <span
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--text-muted)",
          fontWeight: "var(--fw-medium)",
          letterSpacing: "var(--tracking-widest)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function TagInput({ tags, setTags }) {
  const [input, setInput] = useState("");

  const addTag = (val) => {
    const tag = val.trim().slice(0, 25);
    if (tag && !tags.includes(tag) && tags.length < 8) {
      setTags([...tags, tag]);
    }
    setInput("");
  };

  const removeTag = (t) => setTags(tags.filter((x) => x !== t));

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          padding: "var(--space-3) var(--space-4)",
          background: "var(--bg-input)",
          border: "1.5px solid var(--border-default)",
          borderRadius: "var(--radius-md)",
          minHeight: "2.75rem",
          cursor: "text",
        }}
        onClick={() => document.getElementById("tag-input-field").focus()}
      >
        {tags.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-1)",
              padding: "2px var(--space-3)",
              borderRadius: "var(--radius-full)",
              background: "var(--color-brand-red)",
              color: "#fff",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--fw-semibold)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            {t}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); removeTag(t); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.7)", fontSize: "0.75rem",
                lineHeight: 1, paddingLeft: "2px",
              }}
            >×</button>
          </span>
        ))}
        <input
          id="tag-input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={tags.length === 0 ? "Type & press Enter to add tags" : ""}
          style={{
            flex: 1, minWidth: "8rem",
            background: "transparent", border: "none", outline: "none",
            color: "var(--text-primary)",
            fontSize: "var(--text-base)",
            fontFamily: "var(--font-body)",
          }}
        />
      </div>
      <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>
        {tags.length}/8 tags · 2–25 chars each · press Enter or comma to add
      </p>
    </div>
  );
}

function Field({ label, optional, counter, maxLen, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <label
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
          }}
        >
          {label}
          {optional && (
            <span style={{ fontWeight: "var(--fw-regular)", color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>
              (optional)
            </span>
          )}
        </label>
        {counter !== undefined && maxLen && (
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
            {counter}/{maxLen}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "0.25rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
      <span style={{
        fontSize: "0.65rem", fontWeight: 600,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--text-muted)", whiteSpace: "nowrap",
      }}>{label}</span>
      <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
    </div>
  );
}

export default function AddIdeaPage() {
  const [form, setForm] = useState({
    title: "", shortDesc: "", detailedDesc: "", category: "",
    imageUrl: "", budget: "", targetAudience: "",
    problemStatement: "", proposedSolution: "",
  });
  const [tags, setTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: "var(--bg-input)",
    color: "var(--text-primary)",
    border: `1.5px solid ${focused === name ? "var(--color-brand-red)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    padding: "var(--space-3) var(--space-4)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-base)",
    outline: "none",
    resize: "none",
    transition: "border-color 250ms ease",
  });

  return (
    <>
      <style>{`
        .add-idea-page * { box-sizing: border-box; }

        .add-idea-page {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
        }

        @media (max-width: 900px) {
          .add-idea-page { grid-template-columns: 1fr; }
          .ai-left { min-height: auto !important; height: auto !important; position: static !important; padding: 3rem 1.5rem 2.5rem !important; }
          .ai-stats { grid-template-columns: 1fr 1fr !important; }
          .ai-right { max-height: none !important; overflow-y: visible !important; padding: 2rem 1.5rem 3rem !important; }
        }

        @media (max-width: 480px) {
          .ai-left { padding: 2rem 1.25rem 2rem !important; }
          .ai-right { padding: 1.5rem 1.25rem 2.5rem !important; }
          .ai-stats { grid-template-columns: 1fr 1fr !important; gap: 0.5rem !important; }
        }

        .ai-left {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 3.5rem;
          background: linear-gradient(135deg, var(--bg-page) 0%, var(--bg-surface) 60%, rgba(232,57,29,0.07) 100%);
          border-right: 1px solid var(--border-subtle);
          overflow: hidden;
        }

        .ai-left::after {
          content: '';
          position: absolute;
          bottom: -8%;
          right: -12%;
          width: 50%;
          aspect-ratio: 1;
          background: radial-gradient(circle, rgba(232,57,29,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .ai-overline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brand-red);
          margin-bottom: 1.5rem;
        }

        .ai-hero {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.75rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .ai-hero em {
          font-style: normal;
          color: var(--color-brand-red);
        }

        .ai-sub {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 36ch;
          margin-bottom: 3rem;
        }

        .ai-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .ai-right {
          padding: 3rem 3rem 4rem;
          background: var(--bg-surface);
          overflow-y: auto;
          max-height: 100vh;
          scrollbar-width: thin;
          scrollbar-color: var(--border-default) transparent;
        }

        .ai-right::-webkit-scrollbar { width: 4px; }
        .ai-right::-webkit-scrollbar-track { background: transparent; }
        .ai-right::-webkit-scrollbar-thumb { background: var(--border-default); border-radius: 2px; }

        .ai-form-card { max-width: 520px; margin: 0 auto; }

        .ai-form-icon {
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 1rem;
          background: var(--color-brand-red);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          box-shadow: 0 8px 24px rgba(232,57,29,0.4);
        }

        .ai-form-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 0.35rem;
        }

        .ai-form-sub {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .ai-fields { display: flex; flex-direction: column; gap: 1.25rem; }

        .ai-submit {
          width: 100%;
          padding: 1rem;
          border-radius: 9999px;
          background: var(--color-brand-red);
          color: #fff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(232,57,29,0.4);
          transition: background 250ms ease, box-shadow 250ms ease, transform 150ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .ai-submit:hover {
          background: var(--color-brand-red-hover);
          box-shadow: 0 12px 32px rgba(232,57,29,0.55);
        }

        .ai-submit:active { transform: scale(0.98); }
        .ai-submit.success { background: #16a34a; box-shadow: 0 8px 24px rgba(22,163,74,0.4); }

        select option { background: var(--bg-card); color: var(--text-primary); }
      `}</style>

      <div className="add-idea-page">
        <aside className="ai-left">
          <div className="ai-overline">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            Share Your Vision
          </div>

          <h1 className="ai-hero">
            Spark your<br />
            next <em>big idea</em>
          </h1>

          <p className="ai-sub">
            Every groundbreaking startup began as a single thought. Give your idea
            the stage it deserves — the community is ready to listen, collaborate,
            and bring it to life.
          </p>

          <div className="ai-stats">
            <Counter end={10000} label="Ideas Shared" />
            <Counter end={2400} label="Startups Born" />
            <Counter end={48} label="Avg. First Feedback" />
            <Counter end={12} label="Categories" />
          </div>
        </aside>

        <main className="ai-right">
          <div className="ai-form-card">
            <div style={{ textAlign: "center" }}>
              <div className="ai-form-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h2 className="ai-form-title">Submit Your Idea</h2>
              <p className="ai-form-sub">Fill in the details below to share your startup idea</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="ai-fields">
                <Field label="Idea Title" counter={form.title.length} maxLen={120}>
                  <input
                    placeholder="e.g. AI-powered mental health companion"
                    maxLength={120}
                    value={form.title}
                    onChange={set("title")}
                    onFocus={() => setFocused("title")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("title")}
                    required
                  />
                </Field>

                <Field label="Short Description" counter={form.shortDesc.length} maxLen={300}>
                  <textarea
                    placeholder="A one-line pitch that captures your idea (10–300 chars)"
                    maxLength={300}
                    rows={2}
                    value={form.shortDesc}
                    onChange={set("shortDesc")}
                    onFocus={() => setFocused("shortDesc")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("shortDesc")}
                    required
                  />
                </Field>

                <Field label="Detailed Description" counter={form.detailedDesc.length} maxLen={5000}>
                  <textarea
                    placeholder="Describe your idea in detail — what it does, how it works, and why it matters (min 50 chars)"
                    maxLength={5000}
                    rows={4}
                    value={form.detailedDesc}
                    onChange={set("detailedDesc")}
                    onFocus={() => setFocused("detailedDesc")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("detailedDesc")}
                    required
                  />
                </Field>

                <Field label="Category">
                  <select
                    value={form.category}
                    onChange={set("category")}
                    onFocus={() => setFocused("category")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("category"), appearance: "none", cursor: "pointer" }}
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Tags" optional>
                  <TagInput tags={tags} setTags={setTags} />
                </Field>

                <SectionDivider label="optional details" />

                <Field label="Image URL" optional>
                  <input
                    placeholder="https://example.com/your-idea-preview.jpg"
                    value={form.imageUrl}
                    onChange={set("imageUrl")}
                    onFocus={() => setFocused("imageUrl")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("imageUrl")}
                  />
                </Field>

                <Field label="Estimated Budget" optional>
                  <input
                    type="number"
                    placeholder="e.g. 50000"
                    value={form.budget}
                    onChange={set("budget")}
                    onFocus={() => setFocused("budget")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("budget")}
                  />
                </Field>

                <SectionDivider label="problem & solution" />

                <Field label="Target Audience" counter={form.targetAudience.length} maxLen={200}>
                  <input
                    placeholder="e.g. College students, remote workers, pet owners"
                    maxLength={200}
                    value={form.targetAudience}
                    onChange={set("targetAudience")}
                    onFocus={() => setFocused("targetAudience")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("targetAudience")}
                  />
                </Field>

                <Field label="Problem Statement" counter={form.problemStatement.length} maxLen={2000}>
                  <textarea
                    placeholder="What specific problem does your idea solve? Who experiences it and why is it important? (min 20 chars)"
                    maxLength={2000}
                    rows={4}
                    value={form.problemStatement}
                    onChange={set("problemStatement")}
                    onFocus={() => setFocused("problemStatement")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("problemStatement")}
                  />
                </Field>

                <Field label="Proposed Solution" counter={form.proposedSolution.length} maxLen={2000}>
                  <textarea
                    placeholder="How does your solution address the problem? Describe your approach and key differentiators (min 20 chars)"
                    maxLength={2000}
                    rows={4}
                    value={form.proposedSolution}
                    onChange={set("proposedSolution")}
                    onFocus={() => setFocused("proposedSolution")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("proposedSolution")}
                  />
                </Field>

                <button
                  type="submit"
                  className={`ai-submit${submitted ? " success" : ""}`}
                >
                  {submitted ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Idea Launched!
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      Launch Idea
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}