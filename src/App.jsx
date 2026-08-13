import { useEffect, useState } from "react";
import headshot from "./images/HeadShot.png";
import resume from "./pdfs/VenuAdimulam.pdf";
import {
  capabilities,
  certifications,
  education,
  experience,
  projects,
  socialLinks,
} from "./data";

function Arrow({ diagonal = false }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </>
      )}
    </svg>
  );
}

function CodeMark() {
  return (
    <svg className="code-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="m14.5 10-7 8 7 8M21.5 10l7 8-7 8" />
    </svg>
  );
}

function SectionHeading({ index, eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-title-wrap">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const links = ["About", "Experience", "Work", "Skills"];

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${open ? "site-header--menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Venu Adimulam, back to top">
        <span className="brand-mark">VA</span>
        <span className="brand-name">Venu Adimulam</span>
      </a>

      <nav id="main-navigation" className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Main navigation">
        {links.map((link, index) => (
          <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {link}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
          Let’s talk <Arrow diagonal />
        </a>
      </nav>

      <button
        className={`menu-button ${open ? "menu-button--open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="hero-content page-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Senior software engineer · Frontend</p>
          <h1>
            Building modern software for
            <em> real-world complexity.</em>
          </h1>
          <p className="hero-intro">
            I’m Venu Adimulam. I build complex, data-heavy web applications and
            turn demanding workflows into fast, dependable product experiences.
          </p>
          <div className="hero-actions">
            <a className="button button--accent" href="#work">
              Explore my work <Arrow />
            </a>
            <a className="text-link" href={resume} target="_blank" rel="noreferrer">
              View résumé <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="profile-stage reveal reveal--delay">
          <div className="profile-code" aria-hidden="true">
            <span>01</span>
            <span>BUILD</span>
            <span>SHIP</span>
          </div>
          <div className="profile-card">
            <div className="profile-image-wrap">
              <img src={headshot} alt="Venu Adimulam" />
            </div>
            <div className="profile-caption">
              <div>
                <span className="status-dot" />
                <p>Currently</p>
                <strong>Frontend-focused Engineer</strong>
              </div>
              <span className="profile-number">VA/26</span>
            </div>
          </div>
          <div className="floating-note floating-note--top">
            <CodeMark />
            <span>Since</span>
            <strong>2018</strong>
          </div>
          <div className="floating-note floating-note--bottom">
            <span>Focused on</span>
            <strong>Clarity + scale</strong>
          </div>
        </div>
      </div>

      <div className="hero-footer page-shell">
        <div className="hero-meta">
          <span>Java / Spring Boot</span>
          <span>Angular / React</span>
          <span>Cloud / CI/CD</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const line = ["Design with intent", "Engineer for scale", "Ship with confidence"];
  return (
    <div className="marquee" aria-label="Design with intent. Engineer for scale. Ship with confidence.">
      <div className="marquee-track">
        {[...line, ...line].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="page-shell">
        <SectionHeading index="01" eyebrow="About" title="A product mindset, backed by engineering depth." />

        <div className="about-grid reveal">
          <div className="about-lead">
            <p>
              I work across the stack to make complicated products feel
              <span> straightforward.</span>
            </p>
          </div>
          <div className="about-copy">
            <p>
              With a master’s in computer science and experience spanning public-sector
              systems, healthcare research, financial services, and enterprise SaaS, I
              bring deep frontend ownership and full-stack context to every build.
            </p>
            <p>
              My strongest work happens where architecture, performance, and real user
              needs meet—from profiling rendering bottlenecks and building WebGL views to
              creating a clean, reliable path to production.
            </p>
            <a className="text-link text-link--dark" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              More on LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="impact-row reveal">
          <article>
            <strong>200K</strong>
            <p>Daily users on a production interface</p>
          </article>
          <article>
            <strong>35%</strong>
            <p>Faster API response speed</p>
          </article>
          <article>
            <strong>40%</strong>
            <p>Reduction in recovery time</p>
          </article>
          <article>
            <strong>06+</strong>
            <p>Years delivering complex applications</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="From first commit to production impact."
          description="A career shaped by complex domains, practical delivery, and systems that need to keep working."
          light
        />

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item reveal" key={`${item.company}-${item.period}`}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <p className="experience-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
                <div className="tag-row">
                  {item.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="experience-outcomes">
                <span className="outcomes-label">Selected impact</span>
                <ul>
                  {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
                <p className="experience-location">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.theme === "lime") {
    return (
      <div className="project-visual project-visual--lime" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-topbar"><i /><i /><i /><span>case management / overview</span></div>
          <div className="mock-body">
            <div className="mock-sidebar"><b>VA</b><span /><span /><span /><span /></div>
            <div className="mock-dashboard">
              <div className="mock-dashboard-head"><span /><i /></div>
              <div className="mock-stat-row"><span><i />200k</span><span><i />35%</span><span><i />12</span></div>
              <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="mock-table"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
        <div className="visual-chip">PRODUCTION <strong>●</strong></div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--violet" aria-hidden="true">
      <div className="risk-window">
        <div className="risk-topbar">
          <div><i /><i /><i /></div>
          <span>PHOTON / RISK ENGINE</span>
          <b>LIVE</b>
        </div>
        <div className="risk-layout">
          <div className="risk-sidebar"><strong>PX</strong><i /><i /><i /><i /></div>
          <div className="risk-content">
            <div className="risk-heading">
              <span>MARKET RISK / OVERVIEW</span>
              <strong>Portfolio exposure</strong>
            </div>
            <div className="risk-stats">
              <span><i />THROUGHPUT<strong>+25%</strong></span>
              <span><i />UPTIME<strong>99.9%</strong></span>
              <span><i />RELEASES<strong>+30%</strong></span>
            </div>
            <div className="risk-canvas">
              <div className="risk-grid" />
              <svg viewBox="0 0 500 180" preserveAspectRatio="none">
                <path d="M0 140 C60 128 70 74 125 91 S198 150 245 104 S314 32 361 62 S425 125 500 28" />
                <path d="M0 157 C70 153 100 130 152 137 S233 160 292 132 S390 89 500 106" />
              </svg>
              <span className="risk-point risk-point--one" />
              <span className="risk-point risk-point--two" />
              <span className="risk-point risk-point--three" />
            </div>
          </div>
        </div>
      </div>
      <div className="data-pill">WebGL <span>GPU RENDERED</span></div>
    </div>
  );
}

function Work() {
  return (
    <section className="section work" id="work">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Interfaces built for demanding work."
          description="Two production case studies in high-scale application architecture, browser performance, and data-intensive visualization."
        />

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <ProjectVisual project={project} />
              <div className="project-info">
                <div className="project-label"><span>{project.number}</span>{project.label}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-metric"><i />{project.metric}</div>
                <div className="tag-row tag-row--dark">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="page-shell">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="The right tool, used for the right reason."
          description="A practical toolkit for modern interfaces, dependable services, clean data, and repeatable delivery."
          light
        />

        <div className="capability-grid">
          {capabilities.map((group, index) => (
            <article className="capability-card reveal" key={group.title}>
              <div className="capability-top">
                <span>0{index + 1}</span>
                <CodeMark />
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section credentials" id="credentials">
      <div className="page-shell">
        <SectionHeading index="05" eyebrow="Education" title="Strong foundations. Constant forward motion." />

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card reveal" key={item.school}>
              <div className="school-mark">{item.monogram}</div>
              <div>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.field}</p>
                <strong>{item.school}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="certification-wrap reveal">
          <div className="certification-intro">
            <span className="section-kicker"><span>+</span><span>Continuous learning</span></span>
            <h3>Credentials that keep the toolkit current.</h3>
          </div>
          <div className="certification-list">
            {certifications.map((certificate) => (
              <a href={certificate.link} target="_blank" rel="noreferrer" key={certificate.title}>
                <div>
                  <span>{certificate.issuer} · {certificate.date}</span>
                  <strong>{certificate.title}</strong>
                </div>
                <i><Arrow diagonal /></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="page-shell">
        <p className="eyebrow"><span /> Have a project or role in mind?</p>
        <h2>Let’s build something <em>that matters.</em></h2>
        <a className="contact-email" href={socialLinks.email}>
          venu96gopal11@gmail.com <Arrow diagonal />
        </a>

        <div className="footer-row">
          <a className="brand brand--footer" href="#top">
            <span className="brand-mark">VA</span>
            <span className="brand-name">Venu Adimulam</span>
          </a>
          <div className="socials">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a>
          </div>
          <p>© {new Date().getFullYear()} Venu Adimulam</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}

export default App;
