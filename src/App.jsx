import { useState, useEffect } from 'react'

// ── Asset imports ─────────────────────────────────────────────
import heroBanner   from './assets/hero-banner-v4.jpg' // cropped/optimized hero
import kSplash      from './assets/k-splash.jpg'       // K with red/blue paint splashes
import kCircuit     from './assets/k-circuit.jpg'      // circuit board K — AI/tech sections
import kIconDark    from './assets/k-icon-latest.jpg'  // latest K icon for nav/footer/access
import kStandalone  from './assets/k-standalone.jpg'   // K on transparent-ish bg

// ── Demo mock names (no real data) ───────────────────────────
const DEMO_LEADS = [
  { name:'Sample Lead A', zip:'30134', score:88, label:'new lead',  badge:'TOP PRIORITY 1', col:'#e8233a' },
  { name:'Sample Lead B', zip:'30134', score:72, label:'follow-up', badge:'TOP PRIORITY 2', col:'#f97316' },
  { name:'Sample Lead C', zip:'30236', score:65, label:'new lead',  badge:'TOP PRIORITY 3', col:'#3b82f6' },
  { name:'Sample Lead D', zip:'30296', score:54, label:'new lead',  badge:'',               col:'#8a9ab8' },
]

// ── Brand tokens ──────────────────────────────────────────────
const C = {
  navy:    '#07102a',
  navyMid: '#0a1530',
  navyLt:  '#0f1e42',
  card:    '#0d1835',
  red:     '#e8233a',
  blue:    '#1d6fe8',
  muted:   '#8090b0',
  border:  'rgba(255,255,255,0.08)',
  borderMd:'rgba(255,255,255,0.14)',
}

// ── Field style helper ─────────────────────────────────────────
const fieldStyle = {
  width:'100%', padding:'13px 16px',
  background:'rgba(255,255,255,0.05)',
  border:`1px solid rgba(255,255,255,0.14)`,
  borderRadius:12, color:'#fff', fontSize:'0.95rem',
  outline:'none', fontFamily:'inherit', transition:'border-color 0.2s',
}
const onFocus = e => e.target.style.borderColor = 'rgba(232,35,58,0.7)'
const onBlur  = e => e.target.style.borderColor = 'rgba(255,255,255,0.14)'

/* ─────────────────────────────────────────
   DEMO MOCK COMPONENTS
   ───────────────────────────────────────── */
function LeadQueueMock() {
  return (
    <div style={{ background:'#090f20', padding:'18px', fontFamily:'Inter,sans-serif', minHeight:300, fontSize:12 }}>
      <div style={{ color:'#fff', fontWeight:800, fontSize:14, marginBottom:2 }}>Lead Review</div>
      <div style={{ color:C.muted, fontSize:11, marginBottom:12 }}>258 loaded · 12 counties · 258 matching</div>
      <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:7, padding:'7px 10px', color:C.muted, fontSize:11, marginBottom:12 }}>🔍 Search name, address, county, ZIP…</div>
      <div style={{ display:'flex', gap:6, marginBottom:14 }}>
        {['All','Urgent','Follow-Ups'].map((l,i) => (
          <span key={l} style={{ padding:'4px 9px', borderRadius:100, fontSize:11, fontWeight:700, background:i===0?C.blue:'rgba(255,255,255,0.07)', color:'#fff', border:i===0?'none':'1px solid rgba(255,255,255,0.1)' }}>{l}</span>
        ))}
      </div>
      <div style={{ color:'#fff', fontWeight:800, fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>TOP PRIORITY</div>
      {DEMO_LEADS.slice(0,3).map(lead => (
        <div key={lead.name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'9px 11px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:9, marginBottom:5 }}>
          <div>
            {lead.badge && <div style={{ fontSize:9, fontWeight:800, color:C.muted, letterSpacing:'0.06em', marginBottom:2 }}>{lead.badge}</div>}
            <div style={{ color:'#fff', fontWeight:700, fontSize:12 }}>{lead.name}</div>
            <div style={{ color:C.muted, fontSize:10, marginTop:1 }}>Douglas · {lead.zip}</div>
            <div style={{ color:lead.col, fontSize:10, fontWeight:700, marginTop:2 }}>Priority Now {lead.score} · {lead.label}</div>
          </div>
          <div style={{ width:34, height:34, borderRadius:'50%', background:lead.col, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:12, flexShrink:0 }}>{lead.score}</div>
        </div>
      ))}
    </div>
  )
}

function LeadDetailMock() {
  const lead = DEMO_LEADS[0]
  return (
    <div style={{ background:'#090f20', padding:'18px', fontFamily:'Inter,sans-serif', fontSize:12 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
        <div>
          <div style={{ color:'#fff', fontWeight:800, fontSize:14 }}>{lead.name}</div>
          <div style={{ color:C.muted, fontSize:11, marginTop:1 }}>Life Insurance · KFL0000065</div>
        </div>
        <div style={{ width:38, height:38, borderRadius:'50%', background:'#f97316', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:13 }}>{lead.score}</div>
      </div>
      <div style={{ display:'flex', gap:5, marginBottom:12 }}>
        {['PURCHASE','NEW LEAD','Contact readiness · later today'].map(t => (
          <span key={t} style={{ padding:'3px 7px', borderRadius:4, fontSize:9.5, fontWeight:700, background:'rgba(255,255,255,0.07)', color:'#8090b0', border:'1px solid rgba(255,255,255,0.08)' }}>{t}</span>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:12 }}>
        {[['LEAD QUALITY','88','strong','rgba(34,197,94,0.15)','#86efac','rgba(34,197,94,0.3)'],['PRIORITY NOW','54','medium','rgba(249,115,22,0.15)','#fdba74','rgba(249,115,22,0.3)']].map(([label,val,badge,bg,col,border]) => (
          <div key={label} style={{ padding:'9px 11px', background:'rgba(255,255,255,0.04)', borderRadius:8 }}>
            <div style={{ color:C.muted, fontSize:9, fontWeight:700, marginBottom:3 }}>{label}</div>
            <div style={{ display:'flex', alignItems:'center', gap:5 }}>
              <span style={{ color:'#fff', fontWeight:900, fontSize:17 }}>{val}</span>
              <span style={{ padding:'2px 6px', borderRadius:100, fontSize:9, fontWeight:700, background:bg, color:col, border:`1px solid ${border}` }}>{badge}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding:'9px 11px', background:'rgba(29,111,232,0.1)', border:'1px solid rgba(29,111,232,0.2)', borderRadius:7, color:'#7db4ff', fontWeight:700, fontSize:12, marginBottom:10 }}>📞 (000) 000-0000</div>
      <div style={{ color:C.muted, fontSize:9, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>FIELD ACTIONS</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:5 }}>
        {[['🤜','Knock','#fff'],['👋','Approach','#fff'],['📋','Present','#fff'],['📅','Follow-Up','#f97316'],['✅','Sold','#22c55e']].map(([icon,label,col]) => (
          <div key={label} style={{ padding:'9px 3px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:7, textAlign:'center', color:col, fontSize:9, fontWeight:700, lineHeight:1.3 }}>
            <div style={{ fontSize:14, marginBottom:3 }}>{icon}</div>{label}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   NAV
   ───────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:1000,
      padding:'0 clamp(20px,4vw,60px)', height:68,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(7,16,42,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition:'all 0.3s ease',
    }}>
      <a href="#hero" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
        <img src={kIconDark} alt="K-FLO" style={{ height:42, width:42, borderRadius:11, objectFit:'cover', flexShrink:0, border:'1px solid rgba(255,255,255,0.16)', boxShadow:'0 10px 24px rgba(0,0,0,0.42)' }} />
        <span style={{
          fontFamily:"'Bebas Neue','Impact',sans-serif",
          fontSize:'1.72rem', letterSpacing:'0.09em', color:'#f4f8ff', lineHeight:1, textShadow:'0 6px 18px rgba(0,0,0,0.4)',
        }}>K<span style={{ color:C.red }}>-</span>FLO</span>
      </a>
      <div className="nav-links" style={{ display:'flex', gap:28, fontSize:'0.87rem', fontWeight:600, color:C.muted }}>
        {[['#problem','Problem'],['#solution','The Flow'],['#features','Features'],['#agents','For Agents'],['#access','Access']].map(([href,label]) => (
          <a key={href} href={href} style={{ transition:'color 0.15s', textDecoration:'none', color:'inherit' }}
            onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
        ))}
      </div>
      <div style={{ display:'flex', gap:10 }}>
        <a href="https://app.kflo.ai" target="_blank" rel="noopener noreferrer"
          style={{ padding:'9px 20px', background:'transparent', border:'1.5px solid rgba(255,255,255,0.18)', borderRadius:10, color:'#fff', fontSize:'0.85rem', fontWeight:700, cursor:'pointer', textDecoration:'none', transition:'border-color 0.15s' }}
          onMouseEnter={e=>e.target.style.borderColor='rgba(255,255,255,0.4)'} onMouseLeave={e=>e.target.style.borderColor='rgba(255,255,255,0.18)'}>
          Launch App
        </a>
        <a href="#access"
          style={{ padding:'9px 20px', background:`linear-gradient(135deg,${C.red},#c01e32)`, borderRadius:10, color:'#fff', fontSize:'0.85rem', fontWeight:700, cursor:'pointer', textDecoration:'none', boxShadow:'0 4px 20px rgba(232,35,58,0.4)' }}>
          Request Access
        </a>
      </div>
    </nav>
  )
}

/* ─────────────────────────────────────────
   HERO — full-bleed banner image, text overlaid
   ───────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden' }}>

      {/* Full bleed hero banner */}
      <div style={{
        position:'absolute', inset:0, zIndex:0,
        backgroundImage:`url(${heroBanner})`,
        backgroundSize:'cover', backgroundPosition:'center 26%',
        backgroundRepeat:'no-repeat',
      }} />

      {/* Gradient overlay — dark at bottom and right so text reads clean */}
      <div style={{
        position:'absolute', inset:0, zIndex:1,
        background:`
          linear-gradient(to right, rgba(7,16,42,0.08) 0%, rgba(7,16,42,0.0) 52%),
          linear-gradient(to top, rgba(7,16,42,0.84) 0%, rgba(7,16,42,0.22) 36%, rgba(7,16,42,0.03) 64%)
        `,
      }} />

      {/* Content — anchored at bottom, clear of the banner's built-in text */}
      <div style={{
        position:'relative', zIndex:2, width:'100%',
        padding:'0 clamp(24px,5vw,80px)',
        paddingTop:'64vh', paddingBottom:56,
      }}>

        {/* CTAs */}
        <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:44 }}>
          <a href="#access" style={{
            padding:'16px 36px', background:`linear-gradient(135deg,${C.red},#c01e32)`,
            borderRadius:12, color:'#fff', fontSize:'1rem', fontWeight:800,
            cursor:'pointer', textDecoration:'none',
            boxShadow:'0 6px 30px rgba(232,35,58,0.5)',
            display:'inline-flex', alignItems:'center', gap:8,
          }}>
            Request Access
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://app.kflo.ai" target="_blank" rel="noopener noreferrer" style={{
            padding:'16px 32px', background:'rgba(255,255,255,0.08)',
            border:'1.5px solid rgba(255,255,255,0.18)', borderRadius:12,
            color:'#fff', fontSize:'1rem', fontWeight:700,
            cursor:'pointer', textDecoration:'none',
            backdropFilter:'blur(8px)',
          }}>
            Launch App
          </a>
        </div>

        {/* Stats — updated to scale */}
        <div style={{ display:'flex', gap:clamp(32,6,48), flexWrap:'wrap' }}>
          {[
            ['Pilot-Ready','Field Workflow'],
            ['Mobile-First','Daily Execution'],
            ['Human-Led','Operator Control'],
          ].map(([val,lbl]) => (
            <div key={lbl} style={{ borderLeft:`2px solid rgba(232,35,58,0.5)`, paddingLeft:16 }}>
              <div style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:900, color:'#fff', lineHeight:1 }}>{val}</div>
              <div style={{ fontSize:'0.78rem', color:C.muted, fontWeight:600, marginTop:3, letterSpacing:'0.06em', textTransform:'uppercase' }}>{lbl}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// helper — not a real CSS clamp, just avoids calling window
function clamp(min, mid, max) { return min }

/* ─────────────────────────────────────────
   PROBLEM
   ───────────────────────────────────────── */
function Problem() {
  return (
    <section id="problem" style={{ padding:'var(--section-pad)', background:C.navy, position:'relative', overflow:'hidden' }}>
      {/* K-splash accent — faded right edge */}
      <div style={{ position:'absolute', right:'-5%', top:'50%', transform:'translateY(-50%)', width:360, height:360, opacity:0.06, pointerEvents:'none' }}>
        <img src={kSplash} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }} />
      </div>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(232,35,58,0.5),transparent)' }} />

      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ textAlign:'center', maxWidth:680, margin:'0 auto 60px' }}>
          <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:C.red, marginBottom:12 }}>The Problem</p>
          <h2 style={{ fontSize:'clamp(1.9rem,4vw,3.2rem)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
            Field agents are losing time<br /><span style={{ color:C.red }}>before they ever knock.</span>
          </h2>
          <div style={{ width:48, height:3, background:`linear-gradient(90deg,${C.red},${C.blue})`, borderRadius:2, margin:'0 auto 24px' }} />
          <p style={{ color:C.muted, fontSize:'1.05rem', lineHeight:1.7 }}>
            Most agents start the day guessing — what leads to work, where to drive, what happened last time.
            K-FLO helps align the day before the first knock.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 48px 1fr', gap:0, alignItems:'start' }} className="ba-grid">
          {/* BEFORE */}
          <div style={{ background:'rgba(232,35,58,0.05)', border:'1px solid rgba(232,35,58,0.18)', borderRadius:20, padding:28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
              <div style={{ width:9, height:9, borderRadius:'50%', background:C.red, boxShadow:`0 0 8px ${C.red}` }} />
              <span style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.12em', textTransform:'uppercase', color:'#f87085' }}>Before K-FLO</span>
            </div>
            {[['📁','Leads scattered across emails and folders'],['🚗','Wasted drive time, no optimized route'],['📵','Missed follow-ups, dropped appointments'],['📋','Weak daily structure — no starting point'],['📍','Mileage forgotten or never logged'],['🗒','Notes lost after door conversations'],['💼','Sold leads not tied to applications or premium']].map(([icon,text],i) => (
              <div key={i} style={{ display:'flex', gap:10, padding:'11px 13px', background:'rgba(0,0,0,0.3)', borderRadius:9, marginBottom:7 }}>
                <span style={{ fontSize:'1.05rem' }}>{icon}</span>
                <span style={{ fontSize:'0.88rem', color:'#e8a0a8', lineHeight:1.5 }}>{text}</span>
              </div>
            ))}
          </div>
          {/* Arrow */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', paddingTop:80 }} className="ba-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          {/* AFTER */}
          <div style={{ background:'rgba(29,111,232,0.05)', border:'1px solid rgba(29,111,232,0.18)', borderRadius:20, padding:28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
              <div style={{ width:9, height:9, borderRadius:'50%', background:C.blue, boxShadow:`0 0 8px ${C.blue}` }} />
              <span style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.12em', textTransform:'uppercase', color:'#7db4ff' }}>After K-FLO</span>
            </div>
            {[['✅','Leads organized, scored, and ready to work'],['✅','Optimized route — less windshield time'],['✅','Follow-ups surface automatically each morning'],['✅','Guided daily loop from start to close'],['✅','Mileage tracked and locked every field day'],['✅','Notes and recaps tied to every lead'],['✅','Applications and premium logged and retrievable']].map(([icon,text],i) => (
              <div key={i} style={{ display:'flex', gap:10, padding:'11px 13px', background:'rgba(0,0,0,0.3)', borderRadius:9, marginBottom:7 }}>
                <span style={{ fontSize:'1.05rem' }}>{icon}</span>
                <span style={{ fontSize:'0.88rem', color:'#a3c8ff', lineHeight:1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   SOLUTION
   ───────────────────────────────────────── */
const FLOW = [
  { n:'01', label:'HOME',        desc:'Command center. Start here every morning.',           color:C.blue },
  { n:'02', label:'TODAY',       desc:'Enter ZIPs. K-FLO builds your lead stack.',           color:'#9333ea' },
  { n:'03', label:'LEADS',       desc:'Incoming leads reviewed, approved, queued.',          color:C.blue },
  { n:'04', label:'MAP',         desc:'Color-coded territory. Opportunity at a glance.',     color:'#22c55e' },
  { n:'05', label:'NAVIGATE',    desc:'Tap any lead. Navigate. Mileage starts.',             color:'#f97316' },
  { n:'06', label:'KNOCK',       desc:'Record approach, presentation, and outcome.',         color:C.red },
  { n:'07', label:'APPLICATION', desc:'Log sold, carrier, coverage, and premium.',           color:'#22c55e' },
  { n:'08', label:'END DAY',     desc:'All activity locked. Records saved. Day closed.',     color:C.blue },
]

function Solution() {
  return (
    <section id="solution" style={{ padding:'var(--section-pad)', background:`linear-gradient(180deg,${C.navy} 0%,${C.navyMid} 100%)`, position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,rgba(29,111,232,0.4),transparent)` }} />
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 64px' }}>
          <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:12 }}>The System</p>
          <h2 style={{ fontSize:'clamp(1.9rem,4vw,3.2rem)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
            K-FLO turns your day into a<br /><span style={{ color:C.blue }}>guided production loop.</span>
          </h2>
          <div style={{ width:48, height:3, background:`linear-gradient(90deg,${C.blue},${C.red})`, borderRadius:2, margin:'0 auto' }} />
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:4 }}>
          {FLOW.map((step, i) => (
            <div key={step.label} style={{ display:'flex', alignItems:'center' }}>
              <div style={{
                display:'flex', flexDirection:'column', alignItems:'center',
                width:110, padding:'18px 6px',
                background:'rgba(255,255,255,0.03)', border:`1px solid rgba(255,255,255,0.07)`,
                borderRadius:14,
              }}>
                <div style={{
                  width:40, height:40, borderRadius:10, marginBottom:8,
                  background:`${step.color}22`, border:`1px solid ${step.color}44`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.68rem', fontWeight:900, color:step.color,
                }}>{step.n}</div>
                <span style={{ fontSize:'0.68rem', fontWeight:900, letterSpacing:'0.07em', textTransform:'uppercase', color:'#fff', textAlign:'center', lineHeight:1.2, marginBottom:4 }}>{step.label}</span>
                <span style={{ fontSize:'0.63rem', color:C.muted, textAlign:'center', lineHeight:1.4 }}>{step.desc}</span>
              </div>
              {i < FLOW.length-1 && (
                <div style={{ padding:'0 3px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity:0.4 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:44 }}>
          <p style={{ fontSize:'clamp(1.05rem,2.5vw,1.35rem)', fontWeight:850, letterSpacing:'0.01em', color:'#ecf2ff' }}>
            <span style={{ color:'#e8eefc' }}>Less thinking.</span>
            <span style={{ color:'#f4f8ff' }}> More doing.</span>
            <span style={{ color:'#ccdbf8' }}> Better results.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FEATURES
   ───────────────────────────────────────── */
const FEATURES = [
  { icon:'🌅', title:'Daily Morning Brief',          desc:'Start every day knowing exactly where you stand — leads ready, follow-ups flagged, route suggested.', color:C.blue },
  { icon:'📧', title:'Email Lead Intake',            desc:'Incoming leads from your vendor flow directly into your pipeline. Review, approve, and move.', color:'#9333ea' },
  { icon:'🗺', title:'ZIP & Territory Routing',     desc:'Enter your ZIPs once. K-FLO organizes your leads by area and builds a logical working sequence.', color:C.blue },
  { icon:'📍', title:'Color-Coded Lead Map',         desc:'Blue, green, orange, and red pins show you where opportunity sits before you drive.', color:'#22c55e' },
  { icon:'🎯', title:'Next Best Lead Guidance',      desc:'Dynamic lead scoring surfaces the right contact at the right time based on priority and timing.', color:C.red },
  { icon:'🎙', title:'Voice Notes & Presentation Recaps', desc:'Record what happened at the door — voice notes and outcomes tied directly to the lead.', color:'#f97316' },
  { icon:'💲', title:'Application & Premium Tracking', desc:'Log applications, carriers, coverage amounts, and premium as you close. Nothing falls through.', color:'#22c55e' },
  { icon:'🚗', title:'Mileage Tracking',             desc:'Auto-detect or manually log field mileage. Every day saved with your activity record.', color:C.muted },
  { icon:'🔔', title:'Follow-Up & Retention Alerts', desc:'K-FLO surfaces overdue follow-ups and retention contacts before they go cold.', color:C.red },
  { icon:'🏁', title:'End-of-Day Recap',             desc:'Close the field day with all notes, applications, mileage, and lead statuses locked.', color:C.blue },
]

function Features() {
  return (
    <section id="features" style={{ padding:'var(--section-pad)', background:C.navyMid }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ textAlign:'center', maxWidth:620, margin:'0 auto 52px' }}>
          <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:C.red, marginBottom:12 }}>Features</p>
          <h2 style={{ fontSize:'clamp(1.9rem,4vw,3.2rem)', fontWeight:800, color:'#fff', lineHeight:1.15 }}>
            Everything needed to run the day.<br /><span style={{ color:C.blue }}>From first knock to close.</span>
          </h2>
          <div style={{ width:48, height:3, background:`linear-gradient(90deg,${C.red},${C.blue})`, borderRadius:2, margin:'20px auto 0' }} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:18 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:16, padding:24,
              transition:'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.14)';e.currentTarget.style.transform='translateY(-2px)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';e.currentTarget.style.transform='translateY(0)'}}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
                <div style={{ width:42, height:42, borderRadius:10, flexShrink:0, background:`${f.color}18`, border:`1px solid ${f.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.15rem' }}>{f.icon}</div>
                <h4 style={{ fontSize:'0.92rem', fontWeight:800, color:'#fff', lineHeight:1.3 }}>{f.title}</h4>
              </div>
              <p style={{ fontSize:'0.85rem', color:C.muted, lineHeight:1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   MAP LEGEND
   ───────────────────────────────────────── */
const MAP_STATUSES = [
  { color:'#3b82f6', label:'Blue',   status:'New Lead',          desc:'First-touch. Never contacted. Highest priority in fresh batches.' },
  { color:'#22c55e', label:'Green',  status:'Follow-Up / Warm',  desc:'Rapport established. Scheduled return or active conversation.' },
  { color:'#f97316', label:'Orange', status:'Needs Attention',   desc:'Stale, missed payment, or follow-up overdue. Act before it cools.' },
  { color:'#ef4444', label:'Red',    status:'Dead / Low Priority',desc:'Not interested, out of area, or below actionable threshold.' },
]

function MapLegend() {
  return (
    <section id="map" style={{ padding:'var(--section-pad)', background:`linear-gradient(180deg,${C.navyMid} 0%,${C.navy} 100%)` }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }} className="map-grid">
          <div>
            <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:'#22c55e', marginBottom:12 }}>Map Intelligence</p>
            <h2 style={{ fontSize:'clamp(1.9rem,4vw,3rem)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
              See your territory.<br /><span style={{ color:'#22c55e' }}>Act on what matters.</span>
            </h2>
            <div style={{ width:48, height:3, background:`linear-gradient(90deg,#22c55e,${C.blue})`, borderRadius:2, marginBottom:24 }} />
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.75, marginBottom:32 }}>
              K-FLO's color-coded map shows every lead in your ZIP codes by current status — so you know exactly where to go before you leave the driveway.
            </p>
            <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid rgba(255,255,255,0.08)', boxShadow:'0 24px 60px rgba(0,0,0,0.6)' }}>
              <LeadQueueMock />
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {MAP_STATUSES.map(s => (
              <div key={s.label} style={{
                display:'flex', gap:14, padding:'18px 20px',
                background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${s.color}`, borderRadius:12,
                transition:'background 0.2s',
              }}
              onMouseEnter={e=>e.currentTarget.style.background=`${s.color}0a`}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.025)'}>
                <div style={{ width:32, height:32, borderRadius:8, background:s.color, boxShadow:`0 0 14px ${s.color}60`, flexShrink:0 }} />
                <div>
                  <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:4 }}>
                    <span style={{ fontWeight:800, color:'#fff', fontSize:'0.92rem' }}>{s.label}</span>
                    <span style={{ fontSize:'0.72rem', fontWeight:700, color:s.color, padding:'2px 8px', borderRadius:100, background:`${s.color}20`, border:`1px solid ${s.color}40` }}>{s.status}</span>
                  </div>
                  <p style={{ fontSize:'0.83rem', color:C.muted, lineHeight:1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   VIDEO PLACEHOLDER
   ───────────────────────────────────────── */
function VideoPlaceholder() {
  return (
    <section style={{ padding:'var(--section-pad)', background:C.navy }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)', textAlign:'center' }}>
        <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:12 }}>See It In Action</p>
        <h2 style={{ fontSize:'clamp(1.9rem,4vw,3rem)', fontWeight:800, color:'#fff', marginBottom:10 }}>Watch K-FLO run a field day.</h2>
        <p style={{ color:C.muted, fontSize:'1rem', marginBottom:36 }}>From morning brief to end-of-day close — one complete loop.</p>
        <div style={{
          position:'relative', maxWidth:820, margin:'0 auto',
          borderRadius:20, overflow:'hidden',
          background:`linear-gradient(160deg,${C.navyLt},${C.navyMid})`,
          border:'1px solid rgba(255,255,255,0.12)',
          aspectRatio:'16/9', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:16,
          boxShadow:'0 32px 80px rgba(0,0,0,0.7)',
        }}>
          <div style={{ position:'absolute', inset:0, opacity:0.08 }}>
            <img src={kSplash} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
          <div style={{
            width:72, height:72, borderRadius:'50%', zIndex:1,
            background:`linear-gradient(135deg,rgba(232,35,58,0.9),rgba(200,20,40,0.9))`,
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 0 40px rgba(232,35,58,0.5)', cursor:'pointer',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
          <p style={{ color:C.muted, fontSize:'0.88rem', fontWeight:600, zIndex:1 }}>Demo video coming soon</p>
          <p style={{ color:'rgba(128,144,176,0.8)', fontSize:'0.8rem', fontWeight:500, zIndex:1 }}>Drop in an MP4 file or embed URL when ready.</p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FOR AGENTS + MANAGERS
   ───────────────────────────────────────── */
function ForSection() {
  return (
    <section id="agents" style={{ padding:'var(--section-pad)', background:C.navyMid }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:36 }} className="for-grid">
          {[
            {
              emoji:'🏃', eyebrow:'For Field Agents', eyebrowColor:C.blue,
              title:'The next door.',
              body:'K-FLO helps agents know where to go, who to work, what to say, what to log, and what to do next — without stopping to think.',
              checks:['One app. One loop. Every day.','Guided from door to door','Notes and outcomes locked per lead','Mileage, applications, and premium auto-saved'],
              checkColor:'#22c55e',
              bg:'rgba(29,111,232,0.05)', border:'rgba(29,111,232,0.18)',
            },
            {
              emoji:'🎯', eyebrow:'For Agency Managers', eyebrowColor:'#f87085',
              title:'See what\'s working.',
              body:'Monitor production across your team. Know who\'s working leads, who\'s closing, and where your territory is underperforming.',
              checks:['Production, applications, and premium per agent','Follow-up discipline and territory coverage','Lead data quality and import health','Route activity and mileage records'],
              checkColor:C.red,
              bg:'rgba(232,35,58,0.05)', border:'rgba(232,35,58,0.18)',
            },
          ].map(card => (
            <div key={card.title} style={{ padding:36, borderRadius:22, background:card.bg, border:`1px solid ${card.border}` }}>
              <div style={{ fontSize:'2.2rem', marginBottom:14 }}>{card.emoji}</div>
              <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:card.eyebrowColor, marginBottom:12 }}>{card.eyebrow}</p>
              <h3 style={{ fontSize:'clamp(1.5rem,3vw,2rem)', fontWeight:900, color:'#fff', marginBottom:14 }}>{card.title}</h3>
              <p style={{ color:C.muted, fontSize:'0.97rem', lineHeight:1.75, marginBottom:24 }}>{card.body}</p>
              <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {card.checks.map(item => (
                  <li key={item} style={{ display:'flex', gap:10, fontSize:'0.88rem', color:C.muted, lineHeight:1.5 }}>
                    <span style={{ color:card.checkColor, fontWeight:900, flexShrink:0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   INTELLIGENCE — uses circuit K
   ───────────────────────────────────────── */
function Intelligence() {
  return (
    <section style={{ padding:'var(--section-pad)', background:C.navy, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', right:'-8%', transform:'translateY(-50%)', width:320, height:320, opacity:0.07, pointerEvents:'none' }}>
        <img src={kCircuit} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:24 }} />
      </div>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }} className="intel-grid">
          <div>
            <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:12 }}>AI Intelligence</p>
            <h2 style={{ fontSize:'clamp(1.9rem,4vw,3rem)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>
              The system gets sharper<br /><span style={{ color:C.blue }}>as the field gets cleaner.</span>
            </h2>
            <div style={{ width:48, height:3, background:`linear-gradient(90deg,${C.blue},${C.red})`, borderRadius:2, marginBottom:24 }} />
            <p style={{ color:C.muted, fontSize:'1rem', lineHeight:1.75, marginBottom:20 }}>
              K-FLO separates activity from production, identifies missing records, highlights stale follow-ups, and improves the next-best-lead engine over time.
            </p>
            <div style={{ padding:'14px 18px', background:'rgba(29,111,232,0.08)', borderRadius:10, border:'1px solid rgba(29,111,232,0.2)', marginBottom:28 }}>
              <p style={{ fontSize:'0.88rem', color:'#7db4ff', fontWeight:700, lineHeight:1.6 }}>
                K-FLO recommends. Admin approves. Human control stays intact.
              </p>
            </div>
            <ul style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[['Dynamic scoring','Leads re-rank in real time based on timing, territory, and touch history'],['Gap detection','Identifies leads with missing applications, notes, or follow-up records'],['Stale alert engine','Surfaces leads that haven\'t been touched before they age out'],['Production insights','Separates activity from output — so you know what\'s working']].map(([t,d]) => (
                <li key={t} style={{ display:'flex', gap:12, padding:'12px 14px', background:'rgba(255,255,255,0.025)', borderRadius:10, border:'1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ color:C.blue, fontWeight:900, fontSize:'1rem', flexShrink:0 }}>⚡</span>
                  <div><span style={{ fontWeight:800, color:'#fff', fontSize:'0.88rem' }}>{t} — </span><span style={{ color:C.muted, fontSize:'0.85rem', lineHeight:1.5 }}>{d}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ borderRadius:20, overflow:'hidden', border:'1px solid rgba(255,255,255,0.14)', boxShadow:'0 32px 80px rgba(0,0,0,0.6)' }}>
            <LeadDetailMock />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FOUNDING ACCESS
   ───────────────────────────────────────── */
function FoundingAccess() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendError, setSendError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSendError('')
    const data = new URLSearchParams(new FormData(e.target)).toString()
    try {
      const response = await fetch('/', {
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:data,
      })
      if (!response.ok) throw new Error(`Request failed (${response.status})`)
      setSent(true)
    } catch {
      setSendError('We could not submit your request right now. Please retry in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="access" style={{
      padding:'var(--section-pad)',
      background:`linear-gradient(160deg,#070e20 0%,${C.navyMid} 50%,#050b18 100%)`,
      position:'relative', overflow:'hidden',
    }}>
      {/* Background K */}
      <div style={{ position:'absolute', right:'-4%', top:'50%', transform:'translateY(-50%)', width:380, height:380, opacity:0.05, pointerEvents:'none' }}>
        <img src={kStandalone} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
      <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translateX(-50%)', width:600, height:300, background:'radial-gradient(ellipse,rgba(232,35,58,0.10) 0%,transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 clamp(20px,4vw,60px)', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:580, margin:'0 auto', textAlign:'center' }}>
          <img src={kIconDark} alt="K-FLO" style={{ width:72, height:72, borderRadius:18, margin:'0 auto 20px', display:'block', boxShadow:'0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)' }} />
          <span style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 14px', borderRadius:100, border:'1px solid rgba(232,35,58,0.6)', color:'#f87085', background:'rgba(232,35,58,0.1)', display:'inline-block', marginBottom:16 }}>Limited Pilot</span>
          <h2 style={{ fontSize:'clamp(1.9rem,4vw,3.2rem)', fontWeight:800, color:'#fff', marginBottom:16, lineHeight:1.15 }}>Founding Agent Access</h2>
          <p style={{ color:C.muted, fontSize:'1.03rem', lineHeight:1.7, marginBottom:16 }}>
            K-FLO is currently opening to a limited founding pilot group.
            Early users receive <strong style={{ color:'#fff' }}>priority onboarding</strong>,{' '}
            <strong style={{ color:'#fff' }}>direct feedback access</strong>, and{' '}
            <strong style={{ color:'#fff' }}>early product updates</strong> during pilot rollout.
          </p>
          <p style={{ color:C.muted, fontSize:'0.93rem', lineHeight:1.65, marginBottom:36 }}>
            Founding requests are reviewed individually so rollout stays clean, fast, and field-ready.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:36 }}>
            {[['🚀','Priority Onboarding'],['🎙','Direct Feedback Access'],['🔄','Early Product Updates']].map(([icon,label]) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:7, padding:'8px 14px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.13)', borderRadius:100, fontSize:'0.82rem', fontWeight:700, color:'#fff' }}>
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
          {sent ? (
            <div style={{ padding:'36px 28px', background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.3)', borderRadius:20 }}>
              <div style={{ fontSize:'2.5rem', marginBottom:10 }}>✅</div>
              <h3 style={{ color:'#86efac', marginBottom:8 }}>You're on the founding list.</h3>
              <p style={{ color:C.muted, fontSize:'0.93rem', lineHeight:1.6 }}>We received your request and will follow up as the pilot rollout queue advances.</p>
            </div>
          ) : (
            <form name="founding-access" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}
              style={{ display:'flex', flexDirection:'column', gap:13, textAlign:'left' }}>
              <input type="hidden" name="form-name" value="founding-access" />
              <p style={{ display:'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:13 }} className="access-form-row">
                <div>
                  <label style={{ fontSize:'0.75rem', fontWeight:700, color:C.muted, letterSpacing:'0.07em', textTransform:'uppercase', display:'block', marginBottom:5 }}>Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div>
                  <label style={{ fontSize:'0.75rem', fontWeight:700, color:C.muted, letterSpacing:'0.07em', textTransform:'uppercase', display:'block', marginBottom:5 }}>Email *</label>
                  <input type="email" name="email" required placeholder="your@email.com" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>
              <div>
                <label style={{ fontSize:'0.75rem', fontWeight:700, color:C.muted, letterSpacing:'0.07em', textTransform:'uppercase', display:'block', marginBottom:5 }}>Agency or Team Name</label>
                <input type="text" name="agency" placeholder="Agency or team (optional)" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <button type="submit" disabled={submitting} style={{
                width:'100%', marginTop:4, padding:'16px',
                background:`linear-gradient(135deg,${C.red},#c01e32)`,
                borderRadius:12, color:'#fff', fontSize:'0.97rem', fontWeight:800,
                border:'none', cursor:submitting?'wait':'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                boxShadow:'0 6px 24px rgba(232,35,58,0.4)',
                opacity:submitting?0.85:1,
              }}>
                {submitting ? 'Submitting Request…' : 'Request Founding Access'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <p style={{ textAlign:'center', fontSize:'0.8rem', color:C.muted }}>Reviewed individually. No customer lead data is required to request access.</p>
              {sendError && (
                <p style={{ textAlign:'center', fontSize:'0.82rem', color:'#fca5a5', marginTop:2 }}>{sendError}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:'#030810', borderTop:'1px solid rgba(255,255,255,0.07)', padding:'48px clamp(20px,4vw,60px) 32px' }}>
      <div style={{ maxWidth:1180, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:36, marginBottom:40, paddingBottom:36, borderBottom:'1px solid rgba(255,255,255,0.07)' }} className="footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
              <img src={kIconDark} alt="K-FLO" style={{ width:40, height:40, borderRadius:9, objectFit:'cover' }} />
              <span style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'1.6rem', letterSpacing:'0.07em', color:'#fff', lineHeight:1 }}>K<span style={{ color:C.red }}>-</span>FLO</span>
            </div>
            <p style={{ color:C.muted, fontSize:'0.87rem', lineHeight:1.7, maxWidth:280, marginBottom:12 }}>Knock Smarter. Connect Better. Close More.</p>
            <p style={{ fontSize:'0.77rem', color:'rgba(138,154,184,0.55)', fontStyle:'italic' }}>Powered by Lead Sentinel</p>
          </div>
          <div>
            <p style={{ fontSize:'0.74rem', fontWeight:800, letterSpacing:'0.12em', textTransform:'uppercase', color:C.muted, marginBottom:14 }}>Product</p>
            {[['https://app.kflo.ai','Launch App'],['#access','Request Access'],['#features','Features'],['#solution','How It Works']].map(([href,label]) => (
              <div key={label} style={{ marginBottom:10 }}>
                <a href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined}
                  style={{ fontSize:'0.87rem', color:C.muted, textDecoration:'none', transition:'color 0.15s' }}
                  onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize:'0.74rem', fontWeight:800, letterSpacing:'0.12em', textTransform:'uppercase', color:C.muted, marginBottom:14 }}>Legal</p>
            {[['#','Privacy Policy'],['#','Terms of Service']].map(([href,label]) => (
              <div key={label} style={{ marginBottom:10 }}>
                <a href={href} style={{ fontSize:'0.87rem', color:C.muted, textDecoration:'none', transition:'color 0.15s' }}
                  onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:'0.77rem', color:'rgba(138,154,184,0.45)' }}>© {new Date().getFullYear()} K-FLO. All rights reserved.</p>
          <p style={{ fontSize:'0.77rem', color:'rgba(138,154,184,0.45)', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase' }}>Knock Smarter. Connect Better. Close More.</p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────
   SCROLL TO TOP
   ───────────────────────────────────────── */
function ScrollTop() {
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  if (!vis) return null
  return (
    <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} aria-label="Back to top"
      style={{
        position:'fixed', bottom:28, right:28, zIndex:900,
        width:42, height:42, borderRadius:'50%', border:'none', cursor:'pointer',
        background:`linear-gradient(135deg,rgba(232,35,58,0.9),rgba(200,20,40,0.9))`,
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 18px rgba(232,35,58,0.4)',
      }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  )
}

/* ─────────────────────────────────────────
   RESPONSIVE CSS OVERRIDES
   ───────────────────────────────────────── */
const mobileCSS = `
  :root { --section-pad: clamp(56px,8vw,100px) clamp(20px,5vw,60px); }
  @media(max-width:860px){
    .nav-links{display:none!important}
    .ba-grid,.map-grid,.for-grid,.intel-grid,.footer-grid{grid-template-columns:1fr!important}
    .ba-arrow{display:none!important}
    .access-form-row{grid-template-columns:1fr!important}
  }
  @font-face{}
`

/* ─────────────────────────────────────────
   APP
   ───────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{mobileCSS}</style>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <MapLegend />
        <VideoPlaceholder />
        <ForSection />
        <Intelligence />
        <FoundingAccess />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
