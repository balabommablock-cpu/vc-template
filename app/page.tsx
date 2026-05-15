import type { Metadata } from "next";
import { FUND_NAMES } from "./_funds";

export const metadata: Metadata = {
  title: "Rishabh Balabomma — growth-investor application template",
  description:
    "Pick a fund slug like /apply/sequoia or /apply/peak-xv to read the working note.",
};

export default function ApplyIndex() {
  const examples = Object.entries(FUND_NAMES).slice(0, 8);

  return (
    <main className="cs-page">
      <a href="https://boredfolio.com" className="cs-brand">
        ← boredfolio
      </a>

      <section className="cs-hero">
        <div className="cs-hero-left">
          <div className="cs-window">
            <div className="cs-window-bar">
              <span className="cs-window-dot" />
              <span className="cs-window-dot" />
              <span className="cs-window-dot" />
            </div>
            <div className="cs-window-body">
              <p className="cs-window-from">
                /apply · pick a fund · 8 PM IST
              </p>
              <p className="cs-window-subject">
                The working note lives at /apply/&lt;fund&gt;
              </p>
              {examples.map(([slug, name]) => (
                <p key={slug} className="cs-window-line">
                  <a
                    href={`/apply/${slug}`}
                    style={{
                      color: "inherit",
                      borderBottom: "1px dashed currentColor",
                    }}
                  >
                    /apply/{slug} → {name}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-hero-right">
          <span className="cs-hero-greeting">👋 hi friend</span>
          <h1 className="cs-hero-headline">
            This is a <span className="cursive">template.</span> Pick a{" "}
            <span className="cursive">fund slug.</span>
          </h1>
          <p
            style={{
              marginTop: "1.6rem",
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              color: "var(--cs-ink-2)",
              maxWidth: "44ch",
              lineHeight: 1.55,
            }}
          >
            Try one of the links on the left, or hit{" "}
            <code
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.92em",
                background: "var(--cs-cream-deep)",
                padding: "0.05em 0.35em",
                borderRadius: "3px",
              }}
            >
              /apply/your-fund-slug
            </code>
            . Unknown slugs render with a title-cased name automatically.
          </p>
        </div>
      </section>

      <footer className="cs-foot">
        <p>
          Rishabh Balabomma · Mumbai · written in{" "}
          <a
            href="https://claude.com/code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude Code
          </a>
        </p>
      </footer>
    </main>
  );
}
