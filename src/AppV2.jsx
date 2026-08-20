import { useEffect, useRef, useState } from 'react'
import platformHeader from './assets/kflo-ai-platform-header.webp'
import recoveryCoin from './assets/kflo-recovery-coin.webp'
import roofCoin from './assets/kflo-roof-coin.webp'
import coverageCoin from './assets/kflo-coverage-coin.webp'
import behavioralHealthCoin from './assets/kflo-behavioral-health-coin.webp'
import './AppV2.css'

const CONTACT_EMAIL = 'ryan@savageandsoul.com'
const TALK_SUBJECT = 'K-FLO Recovery Conversation'
const AUDIT_SUBJECT = 'K-FLO Workflow Audit'

const verticals = [
  { name: 'K-FLO Recovery', line: 'Housing • Compliance • Funding', text: 'Recovery-housing operations, resident flow, grant readiness, live oversight, and de-identified funder reporting.', href: 'https://rph.kflo.ai', color: 'blue', image: recoveryCoin, badge: 'LIVE' },
  { name: 'K-FLO Roof', line: 'Crews • Jobs • Projects', text: 'Field execution, inspection workflows, project movement, follow-up, and team accountability.', href: 'https://roof.kflo.ai', color: 'red', image: roofCoin },
  { name: 'K-FLO Coverage', line: 'Inspect • Document • Resolve', text: 'Insurance workflow visibility, documentation, follow-up, and cleaner resolution ownership.', href: 'https://insurance.kflo.ai', color: 'gold', image: coverageCoin },
  { name: 'K-FLO Behavioral Health', line: 'Access • Coordinate • Place • Prove', text: 'Behavioral-health access, capacity, placement coordination, clinical workflows, programs, and de-identified oversight.', href: 'https://behavior.kflo.ai', color: 'violet', image: behavioralHealthCoin, badge: 'DEMO' },
]

const capabilities = [
  ['Capture', 'Intake, forms, calls, uploads, resident activity, inspections, and field work enter one structured flow.'],
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
  const closeContact = () => setContactSubject('')

  return (
    <div className="k2-page">
      <header className="k2-nav">
        <a className="k2-brand k2-brand-wordmark" href="#top">
          <img src={platformHeader} alt="K-FLO AI Operations Platform"/>
        </a>
        <nav><a href="#recovery">Recovery</a><a href="#verticals">Platform</a><a href="#about">About</a></nav>
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
          <div className="k2-hero-art"><img src={platformHeader} alt="K-FLO AI Operations Platform"/></div>
        </section>

        <section className="k2-section k2-bh-callout" id="recovery">
          <img className="k2-coin" src={recoveryCoin} alt="K-FLO Recovery coin" />
          <div><span className="k2-eyebrow">Built for recovery housing</span><h2>Run the house. Prove the work. Protect the funding.</h2><p>Manage resident flow, beds, documentation, incidents, inspections, requirements, grants, and reporting in one operational system. Let the daily work create the record funders and oversight partners need.</p><div className="k2-actions"><a className="k2-button" href="https://rph.kflo.ai">Explore Recovery</a><button className="k2-button k2-button-ghost" type="button" onClick={() => setContactSubject(AUDIT_SUBJECT)}>Request a Workflow Audit</button></div></div>
        </section>

        <section className="k2-section" id="verticals">
          <div className="k2-section-head"><span className="k2-eyebrow">The K-FLO Platform Family</span><h2>Different missions. One execution spine.</h2><p>Recovery leads the way today. Each K-FLO vertical keeps its own vocabulary, workflows, permissions, and reporting while sharing the same operating intelligence underneath.</p></div>
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
          <div><span className="k2-eyebrow">The Shared Engine</span><h2>Capture the work once. Turn it into action and proof.</h2><p>From a resident check-in or grant deliverable to a roof inspection or insurance follow-up, K-FLO converts real activity into cleaner operations and decision-ready visibility.</p></div>
          <div className="k2-capability-grid">{capabilities.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="k2-section k2-about" id="about"><span className="k2-eyebrow">Built for the people doing the work</span><h2>K-FLO is powered by Savage & Soul.</h2><p>Built by operators, builders, and system designers who believe technology should reduce friction, strengthen accountability, and make impact visible.</p></section>
      </main>

      <footer className="k2-footer"><div className="k2-brand k2-brand-wordmark"><img src={platformHeader} alt="K-FLO AI Operations Platform"/></div><p>Built for today. Designed for impact. Powered by Savage & Soul.</p><small>© {new Date().getFullYear()} K-FLO</small></footer>
      <ContactDialog subject={contactSubject} onClose={closeContact} />
    </div>
  )
}
