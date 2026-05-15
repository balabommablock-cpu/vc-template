import type { Metadata } from "next";
import {
  JOURNEY,
  SHIPPED,
  FLAGS,
  SELF_EVAL,
  WHY_PARAS,
  USE_CASES,
  BUILDABLE_PROMPT,
  HONEST_OPENING,
  GAPS,
  STRENGTHS,
  COFFEE_OPTIONS,
  BRIEF_PREVIEW,
  CONTACT,
} from "../_data";
import { fundDisplayName } from "../_funds";
import CopyButton from "../_components/CopyButton";

type Params = { fund: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { fund } = await params;
  const name = fundDisplayName(fund);
  return {
    title: `Hi ${name}. I want the operator seat. By Rishabh Balabomma.`,
    description: `A working note for the ${name} growth team from Rishabh Balabomma. The journey, what shipped, why, what I would build first, the honest read, and coffee.`,
  };
}

function LinkedInSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function GitHubSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default async function FundPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { fund } = await params;
  const name = fundDisplayName(fund);
  const emailSubject = encodeURIComponent(`${name} — coffee?`);

  return (
    <main className="cs-page">
      <a href="https://boredfolio.com" className="cs-brand">
        ← boredfolio
      </a>
      <nav className="cs-nav" aria-label="Page sections">
        <a href="#journey">journey</a>
        <a href="#shipped">shipped</a>
        <a href="#why">why</a>
        <a href="#build">build</a>
        <a href="#honest">honest</a>
        <a href="#flags">flags</a>
        <a href="#coffee">coffee</a>
      </nav>

      {/* HERO */}
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
                Sunday brief · 12 companies · 8 PM IST
              </p>
              <p className="cs-window-subject">
                What I would send you this Sunday
              </p>
              {BRIEF_PREVIEW.map((line) => (
                <p key={line} className="cs-window-line">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-hero-right">
          <span className="cs-hero-greeting">👋 hi {name}</span>
          <h1 className="cs-hero-headline">
            I want the <span className="cursive">operator seat</span> after{" "}
            <span className="cursive">the cheque clears.</span>
          </h1>
        </div>
      </section>

      {/* 01 — JOURNEY */}
      <section id="journey" className="cs-section cs-section--butter">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            The <span className="cursive">journey.</span>
          </h2>
          <p className="cs-section-body">
            Seven years across four rooms. Consulting, growth, embedded
            fintech, AI-native product at a listed BFSI firm. Each room
            left me with the muscle I would need at the seat that runs
            after the cheque clears.
          </p>

          <div className="cs-journey">
            {JOURNEY.map((s) => (
              <article className="cs-stop" key={s.company}>
                <p className="cs-stop-year">{s.years}</p>
                <h3 className="cs-stop-company">{s.company}</h3>
                <p className="cs-stop-role">{s.role}</p>
                <span className="cs-stop-tag">{s.tag}</span>
                <p className="cs-stop-body">{s.body}</p>
                {s.link && (
                  <a
                    href={s.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-stop-link"
                  >
                    📄 {s.link.label} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — SHIPPED */}
      <section id="shipped" className="cs-section cs-section--mauve">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            <span className="cursive">shipped.</span>
          </h2>
          <p className="cs-section-body">
            Built, shipped, owned end-to-end. Each one survived a CFO, a
            compliance review, and at least one regulator. None of them
            are decks.
          </p>

          <div className="cs-shipped">
            {SHIPPED.map((s) => (
              <article className="cs-num-card" key={s.big + s.label}>
                <div className="cs-big-num">{s.big}</div>
                <span className="cs-num-label">{s.label}</span>
                <p className="cs-num-context">{s.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — WHY */}
      <section id="why" className="cs-section cs-section--mint">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            Why <span className="cursive">this seat.</span>
          </h2>
          <div className="cs-why">
            <p>Honestly?</p>
            {WHY_PARAS.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — BUILD FIRST */}
      <section id="build" className="cs-section cs-section--cream">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            <span className="cursive">build</span> first.
          </h2>
          <p className="cs-section-body">
            Every growth-fund JD I have read in the last year asks for an{" "}
            <em>urge to delegate the mundane to bots</em>. Reading 360
            articles a week is mundane. Pre-board prep is mundane. Reading
            every DRHP cover to cover is mundane. Three things I would
            hand to the bots in week one.
          </p>

          <div className="cs-cases">
            {USE_CASES.map((u) => (
              <article className="cs-case" key={u.n}>
                <span className="cs-case-n">{u.n}</span>
                <h3 className="cs-case-h">{u.name}</h3>
                <p className="cs-case-b">{u.body}</p>
              </article>
            ))}
          </div>

          <p className="cs-section-body" style={{ marginTop: "2.5rem" }}>
            Here is the first one, end to end. No Zapier. A Python service
            on a Mac mini or a small VPS, pulling RSS, filings, founder
            posts, and peer signal directly. Cron&apos;d to your inbox at 8 PM
            Sunday.
          </p>

          <div className="cs-flow">
            <span className="cs-flow-step">RSS · Filings · X · LinkedIn</span>
            <span className="cs-flow-arrow">→</span>
            <span className="cs-flow-step">Python cron</span>
            <span className="cs-flow-arrow">→</span>
            <span className="cs-flow-step">SQLite</span>
            <span className="cs-flow-arrow">→</span>
            <span className="cs-flow-step">Claude API</span>
            <span className="cs-flow-arrow">→</span>
            <span className="cs-flow-step">Gmail SMTP</span>
            <span className="cs-flow-arrow">→</span>
            <span className="cs-flow-step">Your inbox, 8 PM Sunday</span>
          </div>

          <p className="cs-section-body">
            Below is the full system prompt. Copy it. Paste it into Claude
            Code. Give it your API keys. Two evenings and it is running.
          </p>

          <div className="cs-prompt-wrap">
            <div className="cs-prompt-bar">
              <span className="cs-prompt-title">
                sunday-brief.system.md
              </span>
              <CopyButton text={BUILDABLE_PROMPT} />
            </div>
            <pre>
              <code>{BUILDABLE_PROMPT}</code>
            </pre>
          </div>

          <span className="cs-section-aside">
            ~₹3,000 a month to run. Cheaper than the analyst it replaces.
          </span>
        </div>
      </section>

      {/* 05 — HONEST READ */}
      <section id="honest" className="cs-section cs-section--butter">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            The <span className="cursive">honest read.</span>
          </h2>
          <p className="cs-section-body">{HONEST_OPENING}</p>

          <div className="cs-honest-cols">
            <div>
              <span className="cs-honest-col-h">what I do not know yet</span>
              <ul className="cs-list">
                {GAPS.map((g) => (
                  <li key={g.n}>
                    <h4 className="cs-list-h">
                      <span className="num">{g.n}</span>
                      {g.title}
                    </h4>
                    <p className="cs-list-b">{g.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="cs-honest-col-h strength">
                what I bring on day one
              </span>
              <ul className="cs-list">
                {STRENGTHS.map((s) => (
                  <li key={s.title}>
                    <h4 className="cs-list-h">{s.title}</h4>
                    <p className="cs-list-b">{s.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="cs-honest-kicker">
            Two quarters in, the question stops being &ldquo;can he do
            the modelling?&rdquo; and becomes &ldquo;where do we point
            him next?&rdquo;
          </p>
        </div>
      </section>

      {/* 06 — RED / GREEN / BEIGE FLAGS */}
      <section id="flags" className="cs-section cs-section--rose">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            red flag. green flag.{" "}
            <span className="cursive">beige flag.</span>
          </h2>
          <p className="cs-section-body">
            Before the ask. I have mostly been a generalist. I say yes first
            and build the plane on the way down. Receipts below. Read them as
            red, green, or beige. (Beige if you cannot decide.)
          </p>

          <div className="cs-flags">
            {FLAGS.map((f, i) => (
              <article className="cs-flag" key={i}>
                <div className="cs-flag-meta">
                  <span className="cs-flag-year">{f.year}</span>
                  <span className="cs-flag-place">{f.place}</span>
                </div>
                <p className="cs-flag-body">{f.body}</p>
              </article>
            ))}
          </div>

          <div className="cs-self">
            <span className="cs-self-h">If you must label me</span>
            <ul className="cs-self-list">
              {SELF_EVAL.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07 — COFFEE */}
      <section id="coffee" className="cs-section cs-section--sage">
        <div className="cs-section-inner">
          <h2 className="cs-section-h">
            <span className="cursive">coffee?</span>
          </h2>
          <p className="cs-section-body">
            Three ways forward. Whichever is easier for you.
          </p>

          <div className="cs-options">
            {COFFEE_OPTIONS.map((opt) => (
              <article className="cs-option" key={opt.n}>
                <p className="cs-option-n">{opt.n}</p>
                <h3 className="cs-option-h">{opt.title}</h3>
                <p className="cs-option-b">{opt.body}</p>
              </article>
            ))}
          </div>

          <div className="cs-cta-row">
            <a
              className="cs-cta-button"
              href={`mailto:${CONTACT.email}?subject=${emailSubject}`}
            >
              📧 email me →
            </a>
          </div>

          <span className="cs-section-aside">
            (Either is a yes from me.)
          </span>

          <div className="cs-lurk">
            <span className="cs-lurk-line">
              Or, if a thirty-minute coffee feels like too much commitment,
              feel free to stalk me first. That is also fine. Most of us
              prefer it.
            </span>
            <div className="cs-lurk-row">
              <a
                href={CONTACT.boredfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-lurk-primary"
              >
                boredfolio.com ↗
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-social"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInSVG />
              </a>
              <a
                href={CONTACT.x}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-social"
                aria-label="X (@barishrao)"
                title="X (@barishrao)"
              >
                <XSVG />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-social"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubSVG />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="cs-foot">
        <p>
          Rishabh Balabomma · Mumbai · exec MBA at IIM Kozhikode (2025–27) ·
          written in{" "}
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
