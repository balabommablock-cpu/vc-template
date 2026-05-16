// Generic application content. Same shape as the Blume page, but
// stripped of fund-specific references so it can render for any
// growth fund passed as a [fund] slug.

export type Stop = {
  years: string;
  company: string;
  role: string;
  tag: string;
  body: string;
  link?: { href: string; label: string };
};

export type Ship = {
  big: string;
  label: string;
  context: string;
};

export type Flag = {
  year: string;
  place: string;
  body: string;
};

export type UseCase = {
  n: string;
  name: string;
  body: string;
};

export const JOURNEY: Stop[] = [
  {
    years: "2018",
    company: "RedSeer",
    role: "Research Analyst",
    tag: "market research",
    body: "Sized the India beauty and personal care opportunity for a private-equity client. Co-authored a public preventive-healthcare report still floating around the internet.",
    link: {
      href: "https://redseer.com/wp-content/uploads/2018/07/preventive-healthcare-a-100-billion-dollar-revolution.pdf",
      label: "$100B preventive-healthcare report",
    },
  },
  {
    years: "2019 to 2020",
    company: "Rapido",
    role: "Growth team",
    tag: "growth",
    body: "Built RFM and behavioural-cohort models in SQL. Gamified loyalty and referrals. Lifted rides-per-user 22% across 10 cities.",
  },
  {
    years: "2021 to 2022",
    company: "Riskcovry",
    role: "Product-Led Growth Lead",
    tag: "embedded fintech",
    body: "Shipped embedded insurance integrations at enterprise scale. Wrote the integration playbook with Ola and IndusInd Bank.",
  },
  {
    years: "2022 to now",
    company: "Motilal Oswal Financial Services",
    role: "Vice President, Products",
    tag: "ai-native product",
    body: "US stocks 0-to-1 in two months. Customer Data Platform 0-to-1 across five group entities through a chinese wall. Enterprise platform for franchise and advisor channel (~40% of firm revenue). AI portfolio recommendation engine. LLM-powered PM workflows on Claude Code.",
  },
];

export const SHIPPED: Ship[] = [
  {
    big: "10M+",
    label: "unified identities",
    context:
      "Built the customer data platform 0-to-1 at Motilal. Five group entities through a chinese wall. Equities, mutual funds, commodities, insurance, lending, on one identity graph. +18% engagement, +12% conversion.",
  },
  {
    big: "~40%",
    label: "of firm revenue",
    context:
      "Architected and own the enterprise platform for franchise and advisor channel at Motilal. Dashboards, ops console, execution platform. Revamped and stabilised the modules that drive the number.",
  },
  {
    big: "-40%",
    label: "advisor prep time",
    context:
      "AI portfolio recommendation engine for the advisor and franchise channel. Owned model output design, data pipelines, evaluation, advisor UX. +15% attach rates.",
  },
  {
    big: "8+",
    label: "functions in the room",
    context:
      "Every product I have shipped needed business, sales, tech, marketing, customer success, legal, compliance, finance, and risk to row in one direction. Mostly into uncharted territory.",
  },
  {
    big: "3 → 12",
    label: "experiments / quarter",
    context:
      "Pioneered LLM-powered PM workflows across the firm. Trained the team on Claude Code, prompt engineering, agentic workflows, AI-native product design.",
  },
];

export const FLAGS: Flag[] = [
  {
    year: "2018",
    place: "RedSeer · Bangalore",
    body: "Boss handed me a case study on day one. I said yes on the spot. Then walked to my senior and asked how case studies were actually made. Shipped. The senior is still a friend.",
  },
  {
    year: "2019",
    place: "Rapido · Bangalore",
    body: "Convinced two PMs to run a secret IPL-themed loyalty game in my assigned cities. Nobody approved the campaign. Rides grew massively in those cities. Nobody asked questions afterward either.",
  },
  {
    year: "2021",
    place: "Riskcovry · Mumbai",
    body: "Joined as solo PM. Knew almost nothing about insurance ops. Learnt the integrations while shipping them with Ola and IndusInd. The playbook is still in use.",
  },
  {
    year: "2022",
    place: "Motilal · US stocks",
    body: "Brought in to lead insurance products. Got handed US stocks from scratch on day three. Shipped 0-to-1 in two months. SEBI, FEMA, US broker-dealer, all in one alignment.",
  },
  {
    year: "2023",
    place: "Motilal · CDP",
    body: "Got assigned the customer data platform. First question to the architect was, in earnest, what is a CDP and don't we already have a decent one. Built the data layer 0-to-1 across five group entities through a strict chinese wall.",
  },
  {
    year: "2024",
    place: "Motilal · Enterprise platform",
    body: "Boss texted me on a Friday: \"aag lag gayi hai bhai, dekh le.\" Stood up a team across product, marketing, ops, tech, QA. Revamped the platform. Stabilised the modules driving ~40% of firm revenue.",
  },
];

export const SELF_EVAL = [
  "Strong action bias. I tend to jump and build the plane on the way down.",
  "Creative under pressure. Less so when there is time.",
  "Not the smartest person in any room I have walked into.",
  "Take a lot of notes. Process slowly. Build opinions slowly, but build them.",
  "Allergic to hierarchy. Have skipped four reporting lines along the way without being fired.",
];

export const WHY_PARAS = [
  "I have always worked best across many rooms, not deep inside one. Fintech to consumer to deep-tech, founder to LP, pre-IPO to listed. Generalists are punished in big firms and quietly rewarded in growth funds. The seat is built for the way I work.",
  "I want to work with people sharper than me. A growth-fund partnership in Mumbai or Bangalore has more of those per square metre than most rooms I have access to today.",
  "I want to spend my time on the thinking, not on the gathering. AI is finally good enough at the rest. The seat is structured for exactly that split, and the five-to-ten-year arc is the time horizon I have been waiting for.",
];

export const USE_CASES: UseCase[] = [
  {
    n: "01",
    name: "The Sunday Brief",
    body: "A weekly one-pager per portfolio company in your inbox at 8 PM Sunday. Reads 360 articles, filings, founder posts, peer prints, and regulatory updates so you don't have to.",
  },
  {
    n: "02",
    name: "The board-pack one-pager",
    body: "Founder uploads the 100-page pack to a shared Notion. Claude reads it. Compresses to one page: KPI delta vs last quarter, three strategic issues, five questions worth asking. Lands before the meeting.",
  },
  {
    n: "03",
    name: "The DRHP digest",
    body: "Someone files a DRHP. Twenty minutes later you have the cap table, OFS-to-fresh ratio, employee metrics, peer multiples, and the risk-factor anomalies. Versus four hours of reading by hand.",
  },
];

export const BUILDABLE_PROMPT = `You are building "Sunday Brief", an automated weekly portfolio
news + filings + founder-signal summary for a growth-stage VC investor.

Stack: Python service on a Mac mini or a small VPS (Fly.io, Hetzner,
Vercel cron, etc.). No Zapier. No SaaS subscriptions beyond Claude.

INPUTS (the human supplies once):
- A list of 10 to 15 portfolio companies, each with:
  * Company name and sector
  * One key listed comparable (e.g., for an SFB: Ujjivan SFB)
  * Two competitors to watch
  * Founders' LinkedIn URLs and X / Twitter handles
  * Filing handles (BSE/SEBI/MCA CIN; RBI handle if regulated)
  * Date of next quarterly board meeting (if known)

DATA SOURCES the brief pulls from:
- Company press-release RSS feeds
- Google News alerts (RSS via feedparser)
- Listed comparable's investor-relations RSS / earnings transcript
- Sector regulator releases (RBI, IRDAI, SEBI, FSSAI, etc.)
- BSE / SEBI / MCA public filings APIs
- Earnings-call transcripts (where public, via TIKR / company IR)
- Founder X / Twitter posts (X API v2)
- Founder LinkedIn posts and senior-hire / senior-exit events
- Tracxn / VCCircle for funding-round signal
- Glassdoor / AmbitionBox sentiment delta (optional)

WORKFLOW you scaffold:

Step 1. A Python service, cron'd every 6 hours:
  - Pulls all RSS + API sources above
  - De-duplicates and stages new items in a SQLite database
  - Schema: id, company, source, timestamp, title, url, body, raw_payload

Step 2. Sunday 18:00 IST cron:
  - Reads the past 7 days of items per company
  - Calls the Anthropic API (sonnet-4-7 or opus-4-7) with the prompt template
  - Writes the output to a 'briefs' table

Step 3. Gmail SMTP, Sunday 20:00 IST:
  - Reads the briefs table
  - Sends one HTML email per company to the investor's inbox
  - Subject: "[Company] · Week in numbers · [date range]"

PROMPT TEMPLATE (used inside the Sunday cron):
"""
You are writing a 1-page weekly brief on [Company] for a senior
growth investor. The reader has 60 seconds. Plain English. No
marketing language. Cite every number with its public source URL
or filing page reference.

Inputs (this week's articles + filings + founder posts):
[paste relevant SQLite rows]

Format the output exactly like this:

[Company] · Week in numbers · [date range]

WEEK IN NUMBERS
  → One operating ratio with trend
  → Confirmed date of next board meeting
  → One material commercial move this week

PEER PULSE
  → Three listed peers, last-quarter print, delta to prior
  → One peer at a multiple worth flagging

REGULATORY
  → One sector update relevant to this company
  → Pending approval, with last-update date

FOUNDER SIGNAL
  → Founder posts of substance from X / LinkedIn this week
  → Senior hires made or lost in the team

PENDING FROM LAST BOARD
  → Action item · owner · due · status

ONE THING TO ASK ON MONDAY
  → A single neutrally phrased question the data suggests is worth
    asking. One sentence.

If a section has no signal, write "Nothing to report." Do not invent
data. Better to under-report than over-report.
"""

ACCESS YOU WILL NEED:
- Anthropic API key (sonnet-4-7 or opus-4-7 access)
- Gmail app password for SMTP
- A Mac mini, VPS, or cloud function for the cron
- X API v2 bearer token (Basic tier, ~$100/mo, optional)
- The portfolio company list

Total build time: ~2 evenings end-to-end.
Total running cost: ~₹3,000 a month including API usage.

Begin by asking the human for the inputs above. Then output a
step-by-step plan. Pause whenever a step needs manual setup and
instruct the human clearly. Show your working.`;

export const HONEST_OPENING =
  "Most of what I do not know yet can be bridged with a ₹10k Claude subscription and a couple of months. The honest list anyway.";

export const GAPS = [
  {
    n: "01",
    title: "Three-statement models from scratch",
    body: "The sit-down-with-Excel kind, in IB house style. Couple of months. Damodaran's course, five live models on listed peers, four notes reviewed by a senior.",
  },
  {
    n: "02",
    title: "Cap-table mechanics under term-sheet pressure",
    body: "I have read enough to understand the moves. Have not been on the negotiating side of one yet. Learnable in the seat over one or two deal cycles.",
  },
  {
    n: "03",
    title: "Board observer reps",
    body: "Only learnable in the seat. Six to nine months. You would know by Q3 whether I show up well in those rooms.",
  },
  {
    n: "04",
    title: "Sector depth outside BFSI",
    body: "Tech and AI I enjoy and pick up quickly. Deep-tech, climate, and frontier consumer I will pick up the way I always do, by being the person who asks the boring questions first in every founder meeting.",
  },
  {
    n: "05",
    title: "LP letter writing at fund cadence",
    body: "I write internal memos that get forwarded to the CEO. Different audience, different bar. Six months to calibrate.",
  },
];

export const STRENGTHS = [
  {
    title: "Building and running teams",
    body: "Lead a team of five PMs at Motilal. Stood up cross-functional squads of product, marketing, ops, tech, and QA for the enterprise platform revamp. Most of those people are still on the team. Most of them are friends.",
  },
  {
    title: "Stakeholder management at the exec layer",
    body: "Daily interface with the CEO, CTO, head of compliance, head of sales, head of risk. The spec lands faster when the CTO and the chief compliance officer both nod in the same meeting. That coordination is most of the job.",
  },
  {
    title: "Vendor and contract negotiation",
    body: "Owned procurement of Mixpanel, CleverTap, Amplitude, Tableau, and three more SaaS tools at Motilal. Negotiated the deals, wrote the SOWs, compressed cycles. Comfortable on both sides of a price conversation.",
  },
  {
    title: "AI, automation, platform-engineering muscle",
    body: "Three experiments a quarter became twelve. Claude Code, agentic workflows, prompt engineering, AI-native product design. Trained the team. The toolchain that built this page is the same one.",
  },
];

export const COFFEE_OPTIONS = [
  {
    n: "01",
    title: "Coffee in Bandra",
    body: "Thirty minutes. I will show up with three questions I want to ask you. You bring whatever was on your desk this week. Zoom works if you are out of town.",
  },
  {
    n: "02",
    title: "The 200-word test",
    body: "Pick any name in your portfolio. The flashier the better. I send back a 200-word read on operating leverage with public sources cited. Sunday before midnight. If the read lands, we keep talking.",
  },
  {
    n: "03",
    title: "The new-hire brief",
    body: "Hand me the brief you would give a new hire in their first week. I do it. We compare answers. If mine looks like yours, we have something. If not, you saved a hire.",
  },
];

export const BRIEF_PREVIEW = [
  "A small-finance bank · costs run 83% of income, peers at 60-65%",
  "A fintech · just filed to IPO, mostly existing investors selling",
  "A consumer brand · results out Thursday, the listed rival reports first",
  "A logistics startup · raised fresh debt, worth a call on cash flow",
];

export const CONTACT = {
  email: "rishabh.balabomma@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabhbalabomma",
  x: "https://x.com/barishrao",
  github: "https://github.com/balabommablock-cpu",
  boredfolio: "https://boredfolio.com",
};
