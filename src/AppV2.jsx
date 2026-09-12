import { useEffect, useRef, useState } from 'react'
import platformHeader from './assets/kflo-ai-platform-header.webp'
import recoveryCoin from './assets/kflo-recovery-coin.png'
import behavioralHealthCoin from './assets/kflo-behavioral-health-coin.webp'
import connectCoin from './assets/kflo-connect-coin.webp'
import commandCoin from './assets/kflo-command-coin.webp'
import grantsCoin from './assets/kflo-grants-coin.webp'
import './AppV2.css'

const CONTACT_EMAIL = 'ryan@kflo.ai'
const TALK_SUBJECT = 'K-FLO Platform Conversation'
const AUDIT_SUBJECT = 'K-FLO Workflow Audit'

const verticals = [
  { name: 'K-FLO Recovery', arc: 'OPERATE', line: 'Operate • Document • Prove', text: 'Recovery-housing operations, resident flow, beds, compliance, funding requirements, and de-identified reporting in one system.', href: 'https://rph.kflo.ai', color: 'blue', image: recoveryCoin, badge: 'LIVE' },
  { name: 'K-FLO BeHave', arc: 'PLACE', line: 'Access • Coordinate • Place • Prove', text: 'Live behavioral-health capacity, court-to-care tracking, placement coordination, program workflows, and verified follow-through.', href: 'https://behavior.kflo.ai', color: 'violet', image: behavioralHealthCoin, badge: 'DEMO' },
  { name: 'K-FLO Connect', arc: 'CONNECT', line: 'Report • Verify • Connect', text: 'The free, association-governed capacity network where approved providers keep beds current and the network sees one trusted answer.', href: 'https://connect.kflo.ai', color: 'cyan', image: connectCoin, badge: 'LIVE · FREE' },
  { name: 'K-FLO Command', arc: 'PROVE', line: 'Oversight • Insight • Proof', text: 'Live, de-identified visibility into network capacity, compliance posture, deliverables, and outcomes across funded programs.', href: 'https://command.kflo.ai', color: 'teal', image: commandCoin },
  { name: 'K-FLO Grant Intelligence', arc: 'FUND', line: 'Find • Evaluate • Apply • Report', text: 'A developing funding workspace that connects opportunity discovery, application work, award management, and reporting.', href: 'https://grants.kflo.ai', color: 'green', image: grantsCoin, badge: 'EARLY STAGE' },
]

const capabilities = [
  ['Capture', 'Intake, referrals, uploads, resident activity, bed updates, placements, and grant work enter one structured flow.'],
  ['Coordinate', 'K-FLO assigns ownership, status, eligibility, priority, and the next action.'],
  ['Operate', 'Teams work from role-based dashboards, queues, schedules, and documented workflows.'],
  ['Prove', 'Leaders, funders, and oversight partners see outcomes, compliance, capacity, and impact.'],
]

function ContactDialog({ subject, onClose }) {
  const closeButtonRef = useRef(null)
  const [copyStatus, setCopyStatus] = useState('')
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}`

  useEffect(() => {
    if (!subject) return undefined
    const previouslyFocused = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.classList.add('k2-modal-open')
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()
    return () => {
      document.body.classList.remove('k2-modal-open')
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [subject, onClose])

  if (!subject) return null

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopyStatus('Email copied')
    } catch {
      setCopyStatus(`Copy this email: ${CONTACT_EMAIL}`)
    }
  }

  return (
    <div className="k2-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="k2-contact-dialog" role="dialog" aria-modal="true" aria-labelledby="k2-contact-title">
        <button ref={closeButtonRef} className="k2-modal-close" type="button" onClick={onClose} aria-label="Close contact options">×</button>
        <span className="k2-eyebrow">Talk with K-FLO</span>
        <h2 id="k2-contact-title">Let’s start the conversation.</h2>
        <p>For a pilot, workflow audit, partnership, or product demonstration, reach Ryan directly.</p>
        <div className="k2-contact-address">
          <span>Email</span>
          <a href={mailtoUrl}>{CONTACT_EMAIL}</a>
        </div>
        <div className="k2-contact-actions">
          <a className="k2-button" href={gmailUrl} target="_blank" rel="noreferrer">Open Gmail</a>
          <a className="k2-button k2-button-ghost" href={mailtoUrl}>Use Email App</a>
          <button className="k2-button k2-button-ghost" type="button" onClick={copyEmail}>Copy Email</button>
        </div>
        {copyStatus && <p className="k2-contact-status" role="status">{copyStatus}</p>}
        <small>Nothing is sent automatically. Choose the contact option that works on your device.</small>
      </section>
    </div>
  )
}

export default function AppV2() {
  const [contactSubject, setContactSubject] = useState('')
  const [activeVerticalIndex, setActiveVerticalIndex] = useState(0)
  const closeContact = () => setContactSubject('')
  const activeVertical = verticals[activeVerticalIndex]

  return (
    <div className="k2-page">
      <header className="k2-nav">
        <a className="k2-brand k2-brand-wordmark" href="#top">
          <img src={platformHeader} alt="K-FLO AI Operations Platform"/>
        </a>
        <nav><a href="#recovery">Recovery</a><a href="#connect">Connect</a><a href="#verticals">Platform</a><a href="#about">About</a></nav>
        <button className="k2-button k2-button-small" type="button" onClick={() => setContactSubject(TALK_SUBJECT)}>Talk With Us</button>
      </header>

      <main>
        <section className="k2-hero" id="top">
          <div className="k2-hero-copy">
            <span className="k2-eyebrow">K-FLO Recovery</span>
            <h1>Run the house.<br/><em>Prove the work.</em></h1>
            <p>K-FLO turns daily recovery-housing operations into cleaner compliance, stronger grant reporting, and decision-ready oversight—without rebuilding the year from paper, spreadsheets, emails, and memory.</p>
            <div className="k2-actions"><a className="k2-button" href="https://rph.kflo.ai">Open K-FLO Recovery</a><button className="k2-button k2-button-ghost" type="button" onClick={() => setContactSubject(TALK_SUBJECT)}>Discuss a Pilot</button></div>
            <div className="k2-pills"><span>Recovery Operations</span><span>Compliance Ready</span><span>Grant Visibility</span><span>Oversight Proof</span></div>
          </div>
          <div className="k2-hero-art k2-system-showcase">
            <div className="k2-system-head">
              <img src={platformHeader} alt="K-FLO AI Operations Platform"/>
              <span>Explore the system</span>
            </div>
            <div className={`k2-system-feature ${activeVertical.color}`} key={activeVertical.name} aria-live="polite">
              <div className="k2-system-coin-wrap">
                <img src={activeVertical.image} alt={`${activeVertical.name} coin`}/>
              </div>
              <div className="k2-system-detail">
                <span className="k2-system-stage">{activeVertical.arc} · 0{activeVerticalIndex + 1}</span>
                <h2>{activeVertical.name}</h2>
                <strong>{activeVertical.line}</strong>
                <p>{activeVertical.text}</p>
                <a href={activeVertical.href}>Open {activeVertical.name.replace('K-FLO ', '')} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="k2-arc-tabs" aria-label="Explore the K-FLO Arc">
              {verticals.map((vertical, index) => (
                <button
                  className={`k2-arc-button ${index === activeVerticalIndex ? 'active' : ''}`}
                  type="button"
                  key={vertical.arc}
                  aria-pressed={index === activeVerticalIndex}
                  aria-label={`Show ${vertical.name}: ${vertical.arc.toLowerCase()}`}
                  onClick={() => setActiveVerticalIndex(index)}
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  <strong>{vertical.arc}</strong>
                </button>
              ))}
            </div>
            <p className="k2-arc-caption"><span>K-FLO ARC</span> Operate → Place → Connect → Prove → Fund</p>
          </div>
        </section>

        <section className="k2-section k2-bh-callout" id="recovery">
          <img className="k2-coin" src={recoveryCoin} alt="K-FLO Recovery coin" />
          <div><span className="k2-eyebrow">Built for recovery housing</span><h2>Run the house. Prove the work. Protect the funding.</h2><p>Manage resident flow, beds, documentation, incidents, inspections, requirements, grants, and reporting in one operational system. Let the daily work create the record funders and oversight partners need.</p><div className="k2-actions"><a className="k2-button" href="https://rph.kflo.ai">Explore Recovery</a><button className="k2-button k2-button-ghost" type="button" onClick={() => setContactSubject(AUDIT_SUBJECT)}>Request a Workflow Audit</button></div></div>
        </section>

        <section className="k2-section k2-connect-spotlight" id="connect">
          <div className="k2-connect-copy">
            <div className="k2-connect-kicker">
              <span className="k2-eyebrow">The free capacity network</span>
              <span className="k2-connect-live">Live · Free</span>
            </div>
            <h2>Stop chasing bed counts.<br/><em>Share one trusted answer.</em></h2>
            <p>K-FLO Connect gives approved recovery homes and association leaders one current, time-stamped capacity network. Providers maintain their own availability. The network can see what is current, what needs a fresh report, and what capacity is still upcoming.</p>
            <div className="k2-connect-proof-grid">
              <article><span>01</span><strong>Provider-owned</strong><p>Each home reports its own capacity from one controlled record.</p></article>
              <article><span>02</span><strong>Trust visible</strong><p>Association status and report freshness stay clear at a glance.</p></article>
              <article><span>03</span><strong>Privacy preserved</strong><p>Aggregate capacity only. Resident records remain at their source.</p></article>
            </div>
            <div className="k2-actions">
              <a className="k2-button k2-connect-button" href="https://connect.kflo.ai">Join Free Connect</a>
              <a className="k2-button k2-button-ghost" href="#verticals">Explore the K-FLO family</a>
            </div>
            <small>Free for approved providers. Network access remains association-governed. Availability never guarantees admission.</small>
          </div>

          <div className="k2-connect-visual">
            <div className="k2-system-coin-wrap k2-connect-coin-wrap">
              <img src={connectCoin} alt="K-FLO Connect coin"/>
            </div>
            <span className="k2-eyebrow">Built to scale state by state</span>
            <h3>One current view.<br/>No resident records.</h3>
            <div className="k2-connect-signal-list">
              <div><span>CAPACITY</span><strong>Current, stale, or upcoming</strong></div>
              <div><span>TRUST</span><strong>Association status stays authoritative</strong></div>
              <div><span>ACTION</span><strong>Know exactly who needs to report</strong></div>
            </div>
          </div>
        </section>

        <section className="k2-section" id="verticals">
          <div className="k2-section-head"><span className="k2-eyebrow">The K-FLO Platform Family</span><h2>Different missions. One execution spine.</h2><p>Recovery, BeHave, Connect, Command, and Grant Intelligence each serve a distinct part of the mission while sharing the same operating intelligence underneath.</p></div>
          <div className="k2-vertical-grid">
            {verticals.map((v) => (
              <a className={`k2-card ${v.color}`} href={v.href} key={v.name}>
                <div className="k2-coin-stage">
                  <img className="k2-coin" src={v.image} alt={`${v.name} coin`}/>
                </div>
                <span>OPERATIONS</span>
                <h3>{v.name}</h3>
                <strong>{v.line}</strong>
                <p>{v.text}</p>
                {v.badge && <b>{v.badge}</b>}
              </a>
            ))}
          </div>
        </section>

        <section className="k2-section k2-platform" id="platform">
          <div><span className="k2-eyebrow">The Shared Engine</span><h2>Capture the work once. Turn it into action and proof.</h2><p>From a resident check-in or bed update to a placement confirmation, grant deliverable, or oversight review, K-FLO converts real activity into cleaner operations and decision-ready visibility.</p></div>
          <div className="k2-capability-grid">{capabilities.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="k2-section k2-about" id="about"><span className="k2-eyebrow">Built for the people doing the work</span><h2>K-FLO is powered by Savage & Soul.</h2><p>Built by operators, builders, and system designers who believe technology should reduce friction, strengthen accountability, and make impact visible.</p></section>
      </main>

      <footer className="k2-footer"><div className="k2-brand k2-brand-wordmark"><img src={platformHeader} alt="K-FLO AI Operations Platform"/></div><p>Built for today. Designed for impact. Powered by Savage & Soul.</p><small>© {new Date().getFullYear()} K-FLO</small></footer>
      <ContactDialog subject={contactSubject} onClose={closeContact} />
    </div>
  )
}
