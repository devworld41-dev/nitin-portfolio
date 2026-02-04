import './App.css'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'Payment Vendor Integration',
    desc: 'Owned end-to-end delivery of a payment vendor integration enabling secure, compliant, reliable transaction workflows.',
    tags: ['Java', 'Spring Boot', 'Payments', 'Reliability'],
    link: '#',
  },
  {
    title: 'High-volume Onboarding Pipeline',
    desc: 'Optimized onboarding pipeline to process ~1M user records within 3 days while maintaining data consistency and delivery timelines.',
    tags: ['Data Processing', 'Performance', 'Scaling'],
    link: '#',
  },
  {
    title: 'Configurable Q&A Platform',
    desc: 'Designed and built a configurable Q&A system for personalized patient questionnaires and actionable clinical insights (API + schema + architecture).',
    tags: ['API Design', 'Architecture', 'Healthcare'],
    link: '#',
  },
]

const skills = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'FHIR', 'Node.js'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'SQL'] },
  { title: 'Architecture & DevOps', items: ['Microservices', 'API Design', 'Secure Systems', 'CI/CD', 'AWS', 'Git/GitHub'] },
]

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="sectionTitle">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {desc ? <p className="muted">{desc}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#top" aria-label="Home">
            <span className="brandMark" />
            <span className="brandText">Nitin</span>
          </a>

          <nav className="nav">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="navLink">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="topbarActions">
            <a className="button buttonGhost" href="#contact">
              Let’s talk
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="pill">
                <span className="dot" />
                Senior Backend Engineer · <span className="muted">Portfolio</span>
              </div>

              <h1>
                Hi, I’m <span className="accent">Nitin Kishore</span>.
                <br />
                Senior Backend Software Engineer.
              </h1>

              <p className="lead">
                I design and build scalable, secure backend systems using Java, Spring Boot, and RESTful APIs—
                with strong experience in payment integrations, high‑volume data processing, and system architecture.
              </p>

              <div className="heroCtas">
                <a className="button" href="#projects">
                  View projects
                </a>
                <a className="button buttonGhost" href="/Nitin_Kishore_Resume.pdf" download>
                  Download resume
                </a>
                <a className="button buttonGhost" href="#contact">
                  Contact
                </a>
              </div>

              <div className="metaRow">
                <div className="metaCard">
                  <p className="metaLabel">Focus</p>
                  <p className="metaValue">Backend · APIs · Payments · Performance</p>
                </div>
                <div className="metaCard">
                  <p className="metaLabel">Based in</p>
                  <p className="metaValue">Bengaluru, India (IST)</p>
                </div>
              </div>
            </div>

            <div className="heroRight">
              <div className="glass">
                <div className="glassInner">
                  <p className="kicker">Snapshot</p>
                  <h3>What I’m optimizing for</h3>
                  <ul className="list">
                    <li>Scalable, resilient service design</li>
                    <li>Payment integrations & reliability</li>
                    <li>High-volume data pipelines</li>
                    <li>Secure defaults, production readiness</li>
                  </ul>
                  <div className="row wrap">
                    <Badge>Java</Badge>
                    <Badge>Spring Boot</Badge>
                    <Badge>REST</Badge>
                    <Badge>FHIR</Badge>
                    <Badge>AWS</Badge>
                  </div>
                </div>
              </div>

              <div className="gradientCard" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle
              kicker="About"
              title="A little context"
              desc="Backend engineer focused on building reliable systems: clean API contracts, resilient integrations, and performance at scale."
            />

            <div className="grid2">
              <div className="panel">
                <h3>Summary</h3>
                <p className="muted">
                  Senior Backend Software Engineer with ~6 years of experience designing and building scalable,
                  secure backend systems using Java, Spring Boot, and RESTful APIs.
                </p>
                <p className="muted">
                  Strong expertise in payment integrations, high‑volume data processing, and system architecture.
                  Comfortable owning mission‑critical services end‑to‑end: design, delivery, monitoring, and incident response.
                </p>
              </div>

              <div className="panel">
                <h3>Highlights</h3>
                <div className="row wrap">
                  <Badge>Payments Integration</Badge>
                  <Badge>Microservices Migration</Badge>
                  <Badge>Performance Tuning</Badge>
                  <Badge>API Contracts</Badge>
                  <Badge>Production Ownership</Badge>
                </div>
                <div style={{ height: 14 }} />
                <p className="muted">
                  Recent work includes migrating legacy billing to Spring Boot microservices, building FHIR‑compliant APIs,
                  and tuning services (caching/query/JVM) to reduce latency and incidents.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle
              kicker="Projects"
              title="Selected work"
              desc="A few highlights from recent work: payments, APIs, data processing, and platform reliability."
            />

            <div className="cards3">
              {projects.map((p) => (
                <article key={p.title} className="card">
                  <div className="cardTop">
                    <h3>{p.title}</h3>
                    <div className="row wrap">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="muted">{p.desc}</p>
                  <a className="cardLink" href={p.link}>
                    View →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle kicker="Skills" title="Tools I’m comfortable with" />

            <div className="cards3">
              {skills.map((s) => (
                <div key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <ul className="list">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <SectionTitle
              kicker="Contact"
              title="Want to build something together?"
              desc="Add your email, LinkedIn, GitHub, and a short call-to-action."
            />

            <div className="grid2">
              <div className="panel">
                <h3>Get in touch</h3>
                <p className="muted">
                  Email: <a href="mailto:nitin.kishore04@gmail.com">nitin.kishore04@gmail.com</a>
                </p>
                <p className="muted">
                  LinkedIn:{' '}
                  <a href="https://linkedin.com/in/nitin-kishore04" target="_blank" rel="noreferrer">
                    linkedin.com/in/nitin-kishore04
                  </a>
                </p>
                <p className="muted">
                  GitHub:{' '}
                  <a href="https://github.com/nitinkishore04" target="_blank" rel="noreferrer">
                    github.com/nitinkishore04
                  </a>
                </p>

                <div style={{ height: 14 }} />

                <div className="row wrap">
                  <button
                    className="button buttonGhost"
                    onClick={async () => {
                      await navigator.clipboard.writeText('nitin.kishore04@gmail.com')
                    }}
                    type="button"
                  >
                    Copy email
                  </button>
                  <a className="button" href="mailto:nitin.kishore04@gmail.com">
                    Email me
                  </a>
                </div>

                <div style={{ height: 12 }} />

                <p className="muted">
                  (Phone number intentionally omitted.)
                </p>
              </div>

              <div className="panel">
                <h3>Availability</h3>
                <p className="muted">Currently: <strong>Open to opportunities</strong></p>
                <p className="muted">Preferred: backend/platform · APIs · integrations</p>
                <p className="muted">Timezone: IST</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <p className="muted">© {new Date().getFullYear()} Nitin. Built with React + Vite.</p>
            <a className="muted" href="#top">
              Back to top
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}
