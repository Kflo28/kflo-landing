import kIcon from './assets/k-icon-latest.jpg'
import kLogo from './assets/kflo-logo.jpg'

const AUDIT_URL = 'mailto:ryan@savageandsoul.com?subject=K-FLO%20Workflow%20Audit'
const APP_URL = 'https://app.kflo.ai/#/auth'
const RECOV_URL = 'https://rph.kflo.ai'
const ROOF_URL = 'https://roof.kflo.ai/#/auth'
const CLAIM_URL = 'https://insurance.kflo.ai/#/auth'

const workCards = [
  {
    title: 'Lead Intake Automation',
    text: 'Capture web forms, call notes, referrals, and field opportunities into one clean queue before anything gets lost.',
  },
  {
    title: 'Field Routing',
    text: 'Turn open work into assigned tasks, route priorities, and daily movement plans your team can actually execute.',
  },
  {
    title: 'Follow-Up Sequencing',
    text: 'Keep leads, residents, claims, jobs, and paperwork moving with reminders, staged messages, and next-step ownership.',
  },
  {
    title: 'Reporting Dashboards',
    text: 'See activity, blockers, outcomes, status changes, and overdue work without digging through five different apps.',
  },
]

const verticals = [
  {
    name: 'K-FLO',
    label: 'Field Execution Systems',
    line: 'Automate. Optimize. Deliver.',
    text: 'For teams that need leads, tasks, follow-ups, dashboards, and field movement handled in one clean system.',
    color: 'blue',
    href: APP_URL,
  },
  {
    name: 'RECOV-FLO',
    label: 'Recovery Housing Operations',
    line: 'Compliance. Oversight. Reporting.',
    text: 'For recovery housing, sober living, reentry, and care-flow operations that need resident tracking, documentation, grants, inspections, and accountability.',
    color: 'violet',
    href: RECOV_URL,
  },
  {
    name: 'ROOF-FLO',
    label: 'Roofing Lead Execution',
    line: 'Knock. Inspect. Close.',
    text: 'For roofing teams managing canvassing, inspections, estimates, follow-up, and job pipeline movement.',
    color: 'red',
    href: ROOF_URL,
  },
  {
    name: 'INSURE-FLO',
    label: 'Insurance Field Execution',
    line: 'Know the Next Door to Knock.',
    text: 'For insurance field agents and teams using smarter territory targeting, lead routing, follow-up tracking, and neighborhood-level insight to find better prospects and close more policies.',
    color: 'green',
    href: CLAIM_URL,
  },
]

const features = [
  'Intake forms and lead capture',
  'CRM and pipeline tracking',
  'Automated task creation',
  'Follow-up reminders and sequences',
  'Document collection',
  'Team dashboards',
  'Grant and compliance reporting',
  'Field status updates',
  'Client, resident, and customer communication logs',
  'Admin oversight',
]

const flowRows = [
  ['01', 'Capture', 'Forms, calls, referrals, uploads, and field notes enter the system.'],
  ['02', 'Route', 'K-FLO assigns ownership, status, priority, and next movement.'],
  ['03', 'Execute', 'Teams work from dashboards, daily queues, reminders, and field updates.'],
  ['04', 'Report', 'Owners see outcomes, blockers, compliance gaps, and live operational health.'],
]

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="K-FLO home">
        <img src={kIcon} alt="" />
        <span>K-FLO</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#systems">Systems</a>
        <a href="#features">Features</a>
        <a href="#why">Why it works</a>
        <a href="#savage">Savage & Soul</a>
      </nav>
      <div className="nav-actions">
        <a className="ghost-btn" href={APP_URL}>Launch App</a>
        <a className="primary-btn" href={AUDIT_URL}>Book Audit</a>
      </div>
    </header>
  )
}

function DashboardMock() {
  return (
    <div className="dashboard-shell" aria-label="K-FLO dashboard preview">
      <div className="dash-top">
        <div>
          <span className="eyebrow">Command Center</span>
          <h3>Live Flow Control</h3>
        </div>
        <div className="status-pill">SYSTEM ONLINE</div>
      </div>
      <div className="metric-grid">
        {[
          ['247', 'New Leads', '+18%'],
          ['89', 'Tasks Routed', '+12%'],
          ['37', 'Follow-Ups', 'Due today'],
          ['23', 'Clean Outcomes', '+6%'],
        ].map(([value, label, change]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
            <em>{change}</em>
          </div>
        ))}
      </div>
      <div className="dash-body">
        <div className="flow-panel">
          <div className="panel-title">Lead Flow</div>
          <div className="chart-line">
            <i style={{ height: '22%' }} />
            <i style={{ height: '44%' }} />
            <i style={{ height: '36%' }} />
            <i style={{ height: '58%' }} />
            <i style={{ height: '51%' }} />
            <i style={{ height: '73%' }} />
            <i style={{ height: '66%' }} />
            <i style={{ height: '86%' }} />
          </div>
        </div>
        <div className="queue-panel">
          <div className="panel-title">Follow-Up Queue</div>
          {['Hot leads', 'Appointment set', 'Needs documents', 'Report overdue'].map((item, index) => (
            <div className="queue-row" key={item}>
              <span>{item}</span>
              <strong>{[32, 11, 28, 7][index]}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="node-map">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-copy">
        <div className="signal-line">Powered by Savage & Soul</div>
        <h1>Turn Chaos Into Field Execution.</h1>
        <p>
          K-FLO builds AI-assisted workflow systems that help teams capture leads, route tasks,
          automate follow-up, track outcomes, and keep every moving part visible.
        </p>
        <div className="hero-actions">
          <a className="primary-btn big" href={AUDIT_URL}>Book a Workflow Audit</a>
          <a className="ghost-btn big" href="#systems">Explore K-FLO Systems</a>
        </div>
        <div className="hero-tags">
          <span>Automate.</span>
          <span>Optimize.</span>
          <span>Deliver.</span>
        </div>
      </div>
      <DashboardMock />
    </section>
  )
}

function WhatKfloDoes() {
  return (
    <section className="section" id="what">
      <div className="section-head">
        <span className="eyebrow">What K-FLO Does</span>
        <h2>Workflow infrastructure for real-world operators.</h2>
        <p>Not another soft SaaS dashboard. K-FLO maps the work, assigns the next move, and keeps the loop visible.</p>
      </div>
      <div className="card-grid four">
        {workCards.map((card) => (
          <article className="glass-card" key={card.title}>
            <div className="card-icon">⌁</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function VerticalSystems() {
  return (
    <section className="section systems" id="systems">
      <div className="section-head">
        <span className="eyebrow">Vertical Systems</span>
        <h2>One platform family. Multiple operating lanes.</h2>
        <p>Each vertical keeps the same execution spine: intake, routing, follow-up, documentation, visibility, reporting.</p>
      </div>
      <div className="vertical-grid">
        {verticals.map((item) => (
          <a className={`vertical-card ${item.color}`} href={item.href} key={item.name}>
            <div className="vertical-mark">{item.name.slice(0, 1)}</div>
            <span>{item.label}</span>
            <h3>{item.name}</h3>
            <strong>{item.line}</strong>
            <p>{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function PlatformFeatures() {
  return (
    <section className="section features" id="features">
      <div className="feature-copy">
        <span className="eyebrow">Platform Features</span>
        <h2>Built around the way work actually moves.</h2>
        <p>
          K-FLO connects intake, task ownership, documents, communication, dashboards, and reporting
          so teams can stop managing chaos by memory.
        </p>
      </div>
      <div className="feature-list">
        {features.map((feature) => (
          <div className="feature-item" key={feature}>
            <span>✓</span>
            {feature}
          </div>
        ))}
      </div>
    </section>
  )
}

function FlowSection() {
  return (
    <section className="section flow" id="why">
      <div className="section-head left">
        <span className="eyebrow">Why It Works</span>
        <h2>Most teams do not need more apps. They need the right workflow.</h2>
        <p>
          K-FLO connects the steps, removes the gaps, and gives owners a live view of what is
          happening before the wheels come off.
        </p>
      </div>
      <div className="flow-grid">
        {flowRows.map(([number, title, text]) => (
          <div className="flow-row" key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SavageSoul() {
  return (
    <section className="section savage" id="savage">
      <div className="savage-panel">
        <div>
          <span className="eyebrow">Creator Brand</span>
          <h2>K-FLO is powered by Savage & Soul.</h2>
          <p>
            Built by operators, builders, and system designers who care about cleaner workflows,
            stronger accountability, and better outcomes.
          </p>
        </div>
        <img src={kLogo} alt="K-FLO logo" />
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section final-cta" id="audit">
      <div>
        <span className="eyebrow">Ready To Build The Flow?</span>
        <h2>Bring us the mess.</h2>
        <p>
          Leads, residents, claims, jobs, paperwork, follow-ups, reports. We will map the workflow
          and build the system around how the work actually moves.
        </p>
        <a className="primary-btn big" href={AUDIT_URL}>Book a Workflow Audit</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img src={kIcon} alt="" />
        <span>K-FLO</span>
      </div>
      <p>Automate. Optimize. Deliver. · Powered by Savage & Soul</p>
      <small>© {new Date().getFullYear()} K-FLO. All rights reserved.</small>
    </footer>
  )
}

const css = `
  :root {
    color-scheme: dark;
    --bg: #03050a;
    --panel: rgba(12, 18, 31, .78);
    --panel-strong: rgba(17, 25, 42, .92);
    --line: rgba(144, 189, 255, .17);
    --line-hot: rgba(35, 145, 255, .46);
    --blue: #178bff;
    --blue-soft: #67bdff;
    --red: #ff314a;
    --silver: #d7dee8;
    --muted: #8e9bb3;
    --green: #42e38d;
    --violet: #8b7cff;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background:
      radial-gradient(circle at 18% 10%, rgba(24, 125, 255, .22), transparent 30rem),
      radial-gradient(circle at 82% 8%, rgba(255, 49, 74, .10), transparent 27rem),
      linear-gradient(135deg, #02040a 0%, #070b13 42%, #02040a 100%);
    color: #f5f8ff;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body:before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(80, 150, 255, .055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(80, 150, 255, .055) 1px, transparent 1px);
    background-size: 46px 46px;
    mask-image: radial-gradient(circle at 50% 12%, black, transparent 72%);
    z-index: -2;
  }

  body:after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(115deg, transparent 0 18%, rgba(23,139,255,.08) 18.2%, transparent 18.7% 48%, rgba(255,255,255,.045) 48.2%, transparent 48.7%),
      radial-gradient(circle at 50% 0%, rgba(103,189,255,.12), transparent 36rem);
    z-index: -1;
  }

  a { color: inherit; }

  .nav {
    position: sticky;
    top: 0;
    z-index: 20;
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
    padding: 16px clamp(18px, 4vw, 68px);
    border-bottom: 1px solid rgba(255,255,255,.08);
    background: rgba(3, 5, 10, .78);
    backdrop-filter: blur(18px);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-weight: 950;
    letter-spacing: .15em;
  }

  .brand img {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid rgba(255,255,255,.16);
    box-shadow: 0 0 28px rgba(23,139,255,.22);
  }

  .nav nav {
    display: flex;
    gap: clamp(16px, 3vw, 34px);
    color: var(--muted);
    font-size: .92rem;
    font-weight: 800;
  }

  .nav nav a {
    text-decoration: none;
  }

  .nav nav a:hover { color: #fff; }
  .nav-actions { display: flex; align-items: center; gap: 10px; }

  .primary-btn,
  .ghost-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 20px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 950;
    letter-spacing: .01em;
    border: 1px solid transparent;
    white-space: nowrap;
  }

  .primary-btn {
    background: linear-gradient(135deg, #0d87ff, #0057d8 46%, #24c2ff);
    color: #fff;
    box-shadow: 0 0 30px rgba(23, 139, 255, .34), inset 0 1px rgba(255,255,255,.35);
  }

  .ghost-btn {
    background: rgba(255,255,255,.04);
    border-color: rgba(255,255,255,.15);
    color: #f8fbff;
  }

  .big {
    min-height: 54px;
    padding: 0 28px;
    font-size: 1rem;
  }

  .section {
    position: relative;
    padding: clamp(72px, 9vw, 132px) clamp(18px, 5vw, 76px);
  }

  .hero {
    min-height: calc(100vh - 78px);
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(360px, .98fr);
    align-items: center;
    gap: clamp(34px, 6vw, 78px);
    overflow: hidden;
  }

  .hero:before {
    content: "";
    position: absolute;
    width: 62vw;
    height: 62vw;
    max-width: 820px;
    max-height: 820px;
    right: -18vw;
    top: -18vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(23,139,255,.22), transparent 66%);
    filter: blur(4px);
  }

  .signal-line,
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--blue-soft);
    font-size: .78rem;
    font-weight: 950;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .signal-line:before,
  .eyebrow:before {
    content: "";
    width: 34px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--blue-soft));
    box-shadow: 0 0 14px var(--blue);
  }

  h1, h2, h3, p { margin: 0; }

  h1 {
    max-width: 850px;
    margin-top: 22px;
    font-size: clamp(3.3rem, 8.7vw, 8.4rem);
    line-height: .82;
    letter-spacing: -.07em;
    text-transform: uppercase;
    font-weight: 1000;
  }

  h2 {
    font-size: clamp(2.1rem, 4.8vw, 4.8rem);
    line-height: .93;
    letter-spacing: -.055em;
    text-transform: uppercase;
    font-weight: 1000;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.05;
  }

  .hero-copy > p,
  .section-head > p,
  .feature-copy > p,
  .savage-panel p,
  .final-cta p {
    max-width: 710px;
    margin-top: 24px;
    color: var(--muted);
    font-size: clamp(1.03rem, 1.65vw, 1.25rem);
    line-height: 1.72;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
  }

  .hero-tags span {
    padding: 10px 14px;
    border: 1px solid rgba(255,255,255,.13);
    background: rgba(255,255,255,.035);
    color: #d9e7ff;
    border-radius: 12px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-size: .78rem;
  }

  .dashboard-shell {
    position: relative;
    overflow: hidden;
    min-height: 560px;
    border: 1px solid rgba(103,189,255,.25);
    background:
      linear-gradient(145deg, rgba(15,25,43,.96), rgba(5,9,17,.92)),
      radial-gradient(circle at 20% 0%, rgba(23,139,255,.32), transparent 18rem);
    border-radius: 30px;
    padding: 26px;
    box-shadow: 0 50px 120px rgba(0,0,0,.55), 0 0 60px rgba(23,139,255,.13);
  }

  .dashboard-shell:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(103,189,255,.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(103,189,255,.07) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom, black, transparent);
    pointer-events: none;
  }

  .dash-top,
  .dash-body,
  .metric-grid {
    position: relative;
    z-index: 1;
  }

  .dash-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 26px;
  }

  .dash-top h3 {
    margin-top: 8px;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: -.035em;
  }

  .status-pill {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(66,227,141,.09);
    border: 1px solid rgba(66,227,141,.35);
    color: #8dffbd;
    font-size: .72rem;
    font-weight: 950;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 18px;
  }

  .metric,
  .flow-panel,
  .queue-panel,
  .glass-card,
  .vertical-card,
  .feature-item,
  .flow-row,
  .savage-panel {
    border: 1px solid rgba(255,255,255,.11);
    background: linear-gradient(145deg, rgba(255,255,255,.065), rgba(255,255,255,.022));
    box-shadow: inset 0 1px rgba(255,255,255,.08);
  }

  .metric {
    padding: 16px;
    border-radius: 16px;
  }

  .metric strong {
    display: block;
    font-size: 1.85rem;
    line-height: 1;
  }

  .metric span,
  .metric em {
    display: block;
    color: var(--muted);
    margin-top: 8px;
    font-style: normal;
    font-size: .78rem;
  }

  .metric em { color: #8dffbd; }

  .dash-body {
    display: grid;
    grid-template-columns: 1.15fr .85fr;
    gap: 14px;
  }

  .flow-panel,
  .queue-panel {
    min-height: 210px;
    border-radius: 20px;
    padding: 18px;
  }

  .panel-title {
    margin-bottom: 18px;
    color: #dceaff;
    font-size: .82rem;
    font-weight: 950;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .chart-line {
    height: 132px;
    display: flex;
    align-items: end;
    gap: 12px;
    padding: 10px 4px 0;
  }

  .chart-line i {
    flex: 1;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(to top, rgba(23,139,255,.15), rgba(103,189,255,.95));
    box-shadow: 0 0 20px rgba(23,139,255,.28);
  }

  .queue-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,.08);
    color: var(--muted);
  }

  .queue-row strong { color: #fff; }

  .node-map {
    position: absolute;
    inset: auto 0 0 0;
    height: 150px;
    opacity: .45;
    background: radial-gradient(circle at 20% 30%, var(--blue), transparent 3px),
      radial-gradient(circle at 44% 70%, var(--blue-soft), transparent 3px),
      radial-gradient(circle at 76% 36%, var(--red), transparent 3px);
  }

  .section-head {
    max-width: 860px;
    margin: 0 auto 38px;
    text-align: center;
  }

  .section-head.left {
    margin-left: 0;
    text-align: left;
  }

  .section-head h2,
  .feature-copy h2,
  .savage-panel h2,
  .final-cta h2 {
    margin-top: 16px;
  }

  .card-grid {
    display: grid;
    gap: 18px;
  }

  .card-grid.four {
    grid-template-columns: repeat(4, 1fr);
  }

  .glass-card {
    min-height: 245px;
    padding: 26px;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }

  .glass-card:after {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    right: -50px;
    top: -50px;
    background: radial-gradient(circle, rgba(23,139,255,.28), transparent 65%);
  }

  .card-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    margin-bottom: 24px;
    border-radius: 14px;
    background: rgba(23,139,255,.10);
    border: 1px solid rgba(23,139,255,.30);
    color: var(--blue-soft);
    font-size: 1.6rem;
  }

  .glass-card p,
  .vertical-card p,
  .flow-row p {
    margin-top: 14px;
    color: var(--muted);
    line-height: 1.65;
  }

  .systems {
    background: linear-gradient(180deg, transparent, rgba(23,139,255,.035), transparent);
  }

  .vertical-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .vertical-card {
    position: relative;
    min-height: 330px;
    padding: 24px;
    border-radius: 26px;
    text-decoration: none;
    overflow: hidden;
  }

  .vertical-card:before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: .14;
    background-image:
      linear-gradient(120deg, currentColor 1px, transparent 1px),
      radial-gradient(circle at 30% 20%, currentColor, transparent 2px);
    background-size: 54px 54px, 80px 80px;
  }

  .vertical-card.blue { color: var(--blue); }
  .vertical-card.red { color: var(--red); }
  .vertical-card.green { color: var(--green); }
  .vertical-card.violet { color: var(--violet); }

  .vertical-mark {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    margin-bottom: 28px;
    border-radius: 16px;
    border: 1px solid currentColor;
    background: rgba(0,0,0,.22);
    font-weight: 1000;
    font-size: 2rem;
    color: #fff;
    box-shadow: 0 0 34px color-mix(in srgb, currentColor, transparent 70%);
  }

  .vertical-card span,
  .vertical-card h3,
  .vertical-card strong,
  .vertical-card p {
    position: relative;
    z-index: 1;
  }

  .vertical-card span {
    color: var(--muted);
    font-size: .74rem;
    font-weight: 950;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .vertical-card h3 {
    margin-top: 10px;
    font-size: clamp(1.6rem, 2.6vw, 2.4rem);
    color: #fff;
    letter-spacing: -.045em;
  }

  .vertical-card strong {
    display: block;
    margin-top: 8px;
    color: currentColor;
  }

  .features {
    display: grid;
    grid-template-columns: .82fr 1.18fr;
    gap: clamp(28px, 6vw, 78px);
    align-items: start;
  }

  .feature-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 66px;
    padding: 16px;
    border-radius: 17px;
    color: #dce8fa;
    font-weight: 800;
  }

  .feature-item span {
    color: var(--blue-soft);
    font-weight: 1000;
  }

  .flow {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: clamp(30px, 6vw, 74px);
    align-items: start;
  }

  .flow-grid {
    display: grid;
    gap: 14px;
  }

  .flow-row {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 18px;
    align-items: start;
    padding: 20px;
    border-radius: 22px;
  }

  .flow-row > span {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: rgba(23,139,255,.10);
    border: 1px solid rgba(23,139,255,.32);
    color: var(--blue-soft);
    font-weight: 1000;
  }

  .savage-panel {
    display: grid;
    grid-template-columns: 1fr minmax(220px, 420px);
    gap: 34px;
    align-items: center;
    max-width: 1160px;
    margin: 0 auto;
    padding: clamp(28px, 5vw, 54px);
    border-radius: 32px;
    background:
      linear-gradient(135deg, rgba(255,255,255,.075), rgba(255,255,255,.025)),
      radial-gradient(circle at 84% 20%, rgba(23,139,255,.16), transparent 28rem);
  }

  .savage-panel img {
    width: 100%;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.12);
    box-shadow: 0 28px 70px rgba(0,0,0,.45);
  }

  .final-cta {
    text-align: center;
    background:
      radial-gradient(circle at 50% 40%, rgba(23,139,255,.20), transparent 32rem),
      linear-gradient(180deg, transparent, rgba(255,255,255,.03));
  }

  .final-cta > div {
    max-width: 920px;
    margin: 0 auto;
  }

  .final-cta p {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    padding: 28px clamp(18px, 5vw, 76px);
    border-top: 1px solid rgba(255,255,255,.10);
    background: rgba(0,0,0,.26);
    color: var(--muted);
  }

  .footer p,
  .footer small {
    margin: 0;
    font-size: .88rem;
  }

  @media (max-width: 1080px) {
    .hero,
    .features,
    .flow,
    .savage-panel {
      grid-template-columns: 1fr;
    }

    .card-grid.four,
    .vertical-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .dashboard-shell {
      min-height: 480px;
    }
  }

  @media (max-width: 820px) {
    .nav {
      position: relative;
      align-items: flex-start;
      flex-direction: column;
    }

    .nav nav {
      width: 100%;
      overflow-x: auto;
      padding-bottom: 4px;
    }

    .nav-actions {
      width: 100%;
    }

    .nav-actions a {
      flex: 1;
    }

    .hero {
      padding-top: 52px;
    }

    .metric-grid,
    .dash-body,
    .card-grid.four,
    .vertical-grid,
    .feature-list {
      grid-template-columns: 1fr;
    }

    .dashboard-shell {
      min-height: auto;
      padding: 20px;
      border-radius: 24px;
    }

    .flow-row {
      grid-template-columns: 1fr;
    }
  }
`

export default function App() {
  return (
    <>
      <style>{css}</style>
      <Nav />
      <main>
        <Hero />
        <WhatKfloDoes />
        <VerticalSystems />
        <PlatformFeatures />
        <FlowSection />
        <SavageSoul />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
