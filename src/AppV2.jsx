import kIcon from './assets/kflo-ai-coin.webp'
import platformHeader from './assets/kflo-ai-platform-header.webp'
import recoveryCoin from './assets/kflo-recovery-coin.webp'
import roofCoin from './assets/kflo-roof-coin.webp'
import coverageCoin from './assets/kflo-coverage-coin.webp'
import grantsCoin from './assets/kflo-grants-coin.webp'
import './AppV2.css'

const DEMO_URL = 'mailto:ryan@savageandsoul.com?subject=K-FLO%20Behavioral%20Health%20Demo%20Access'
const AUDIT_URL = 'mailto:ryan@savageandsoul.com?subject=K-FLO%20Workflow%20Audit'

function BehavioralCoin({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 220 220" role="img" aria-label="K-FLO Behavioral Health coin">
      <defs>
        <radialGradient id="bhBg" cx="50%" cy="42%" r="65%">
          <stop offset="0" stopColor="#172334" />
          <stop offset="1" stopColor="#030508" />
        </radialGradient>
        <linearGradient id="bhMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".25" stopColor="#9ca6b4" />
          <stop offset=".55" stopColor="#eef2f7" />
          <stop offset="1" stopColor="#5c6674" />
        </linearGradient>
        <filter id="bhGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="110" cy="110" r="104" fill="#05070a" stroke="url(#bhMetal)" strokeWidth="6" />
      <circle cx="110" cy="110" r="92" fill="url(#bhBg)" stroke="#188cff" strokeWidth="2" filter="url(#bhGlow)" />
      <text x="110" y="31" fill="#e7ebf0" fontSize="12" fontWeight="800" textAnchor="middle" letterSpacing="2">K-FLO</text>
      <text x="110" y="199" fill="#e7ebf0" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="1.4">BEHAVIORAL HEALTH</text>
      <g fill="none" stroke="url(#bhMetal)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="66" cy="82" r="13" />
        <path d="M45 112c4-18 38-18 42 0" />
        <path d="M104 65h31M119 50v31" />
        <path d="M145 78l24 17v34h-48V95zM131 129v-20h28v20" />
        <path d="M69 126c18 17 55 20 78 0" />
      </g>
      <path d="M45 149c18-16 38-10 52 0s34 15 72-3" fill="none" stroke="#188cff" strokeWidth="4" filter="url(#bhGlow)" />
      <circle cx="110" cy="151" r="10" fill="#188cff" stroke="#e7ebf0" strokeWidth="3" filter="url(#bhGlow)" />
      <text x="110" y="181" fill="#70bdff" fontSize="8.8" fontWeight="800" textAnchor="middle" letterSpacing="1">ACCESS • COORDINATE • PLACE • PROVE</text>
    </svg>
  )
}

const verticals = [
  { name: 'K-FLO Recovery', line: 'Housing • Compliance • Funding', text: 'Recovery-housing operations, grant readiness, live oversight, and de-identified funder reporting.', href: 'https://rph.kflo.ai', color: 'blue', image: recoveryCoin },
  { name: 'K-FLO Behavioral Health', line: 'Access • Coordinate • Place • Prove', text: 'Referral navigation, housing and care coordination, court-connected services, therapeutic programs, and sponsor impact.', href: DEMO_URL, color: 'cyan', custom: true },
  { name: 'K-FLO Roof', line: 'Crews • Jobs • Projects', text: 'Field execution, inspection workflows, project movement, follow-up, and team accountability.', href: 'https://roof.kflo.ai', color: 'red', image: roofCoin },
  { name: 'K-FLO Coverage', line: 'Inspect • Document • Resolve', text: 'Insurance workflow visibility, documentation, follow-up, and cleaner resolution ownership.', href: 'https://insurance.kflo.ai', color: 'gold', image: coverageCoin },
  { name: 'K-FLO Grants & Funding', line: 'Compliance • Grants • Reporting', text: 'Funding readiness, deliverables, evidence, reporting, and live funder confidence.', href: 'https://rph.kflo.ai', color: 'green', image: grantsCoin },
]

const capabilities = [
  ['Capture', 'Intake, referrals, forms, calls, uploads, and field activity enter one structured flow.'],
  ['Coordinate', 'K-FLO assigns ownership, status, eligibility, priority, and the next action.'],
  ['Operate', 'Teams work from role-based dashboards, queues, schedules, and documented workflows.'],
  ['Prove', 'Leaders, funders, and oversight partners see outcomes, compliance, capacity, and impact.'],
]

export default function AppV2() {
  return (
    <div className="k2-page">
      <header className="k2-nav">
        <a className="k2-brand" href="#top"><img src={kIcon} alt=""/><span>K-FLO</span></a>
        <nav><a href="#verticals">Verticals</a><a href="#platform">Platform</a><a href="#about">About</a></nav>
        <a className="k2-button k2-button-small" href={AUDIT_URL}>Talk With Us</a>
      </header>

      <main>
        <section className="k2-hero" id="top">
          <div className="k2-hero-copy">
            <span className="k2-eyebrow">Powered by Savage & Soul</span>
            <h1>One platform.<br/><em>Every operation.</em></h1>
            <p>K-FLO connects people, programs, field work, compliance, funding, and live reporting—without forcing every industry into the same box.</p>
            <div className="k2-actions"><a className="k2-button" href="#verticals">Explore the Family</a><a className="k2-button k2-button-ghost" href={DEMO_URL}>Request Demo Access</a></div>
            <div className="k2-pills"><span>AI Powered</span><span>Role Based</span><span>Audit Ready</span><span>Real-Time Insight</span></div>
          </div>
          <div className="k2-hero-art"><img src={platformHeader} alt="K-FLO AI Operations Platform"/><div className="k2-orbit"><BehavioralCoin /></div></div>
        </section>

        <section className="k2-section" id="verticals">
          <div className="k2-section-head"><span className="k2-eyebrow">K-FLO Platform Verticals</span><h2>Different missions. One execution spine.</h2><p>Each vertical keeps its own vocabulary, workflows, permissions, and reporting—while sharing the same operating intelligence underneath.</p></div>
          <div className="k2-vertical-grid">
            {verticals.map((v) => <a className={`k2-card ${v.color}`} href={v.href} key={v.name}>{v.custom ? <BehavioralCoin className="k2-coin"/> : <img className="k2-coin" src={v.image} alt=""/>}<span>OPERATIONS</span><h3>{v.name}</h3><strong>{v.line}</strong><p>{v.text}</p>{v.custom && <b>NEW VERTICAL</b>}</a>)}
          </div>
        </section>

        <section className="k2-section k2-platform" id="platform">
          <div><span className="k2-eyebrow">The Shared Engine</span><h2>Capture the work once. Turn it into action and proof.</h2><p>From a resident check-in or therapeutic session to a roof inspection or grant deliverable, K-FLO converts real activity into cleaner operations and decision-ready visibility.</p></div>
          <div className="k2-capability-grid">{capabilities.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="k2-section k2-bh-callout">
          <BehavioralCoin />
          <div><span className="k2-eyebrow">K-FLO Behavioral Health</span><h2>Help people move from need to care.</h2><p>Designed to connect referral sources, housing, clinical and court-connected services, therapeutic programs, program operators, and funders—while protecting individual records and proving system-level impact.</p><div className="k2-actions"><a className="k2-button" href={DEMO_URL}>Request Demo Access</a><a className="k2-button k2-button-ghost" href="mailto:ryan@savageandsoul.com?subject=K-FLO%20Behavioral%20Health%20Partner%20Conversation">Discuss a Pilot</a></div></div>
        </section>

        <section className="k2-section k2-about" id="about"><span className="k2-eyebrow">Built for the people doing the work</span><h2>K-FLO is powered by Savage & Soul.</h2><p>Built by operators, builders, and system designers who believe technology should reduce friction, strengthen accountability, and make impact visible.</p></section>
      </main>

      <footer className="k2-footer"><div className="k2-brand"><img src={kIcon} alt=""/><span>K-FLO</span></div><p>Built for today. Designed for impact. Powered by Savage & Soul.</p><small>© {new Date().getFullYear()} K-FLO</small></footer>
    </div>
  )
}
