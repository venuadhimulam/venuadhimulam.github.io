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

const navItems = [
  ["Profile", "about"],
  ["Experience", "experience"],
  ["Case Studies", "work"],
  ["Technical Index", "skills"],
  ["Education", "education"],
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("nav-open", open);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  const date = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="newsroom-header" id="top">
      <div className="edition-bar page-width">
        <span>Portfolio Edition</span>
        <span>Arlington, Virginia</span>
        <time>{date}</time>
      </div>

      <div className="masthead-row page-width">
        <a href="#top" className="masthead" aria-label="Venu Adimulam, home">
          <span>The portfolio of</span>
          <strong>Venu Adimulam</strong>
        </a>
        <p>Engineering<br />Systems &amp; Product</p>
        <button
          className={`menu-toggle ${open ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`newspaper-nav ${open ? "newspaper-nav--open" : ""}`}
        id="site-navigation"
        aria-label="Primary navigation"
      >
        <div className="page-width newspaper-nav__inner">
          {navItems.map(([label, target], index) => (
            <a href={`#${target}`} onClick={() => setOpen(false)} key={target}>
              <small>0{index + 1}</small>{label}
            </a>
          ))}
          <a className="resume-link" href={resume} target="_blank" rel="noreferrer">
            Read Résumé <Arrow />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="front-page page-width" aria-labelledby="lead-headline">
        <article className="lead-story">
          <div className="story-label"><span>Lead Story</span><span>Senior Frontend Engineer</span></div>
          <h1 id="lead-headline">Engineering interfaces for systems that cannot afford to slow down.</h1>
          <p className="deck">
            Venu Adimulam builds complex, data-heavy web applications where browser
            performance, clear architecture, and dependable delivery matter.
          </p>
          <div className="byline">
            <span>By Venu Adimulam</span>
            <span>6+ years in software engineering</span>
          </div>
          <div className="lead-actions">
            <a href="#work">Read the case studies <Arrow /></a>
            <a href={resume} target="_blank" rel="noreferrer">Open résumé <Arrow /></a>
          </div>
        </article>

        <figure className="front-portrait">
          <div className="portrait-frame"><img src={headshot} alt="Venu Adimulam" /></div>
          <figcaption>
            <span>Venu Adimulam, software engineer</span>
            <span>Photograph: Niagara Falls, N.Y.</span>
          </figcaption>
        </figure>

        <aside className="front-briefs" aria-label="Career highlights">
          <h2>At a glance</h2>
          <article>
            <strong>12</strong>
            <p>Services connected through the delivery pipeline.</p>
          </article>
          <article>
            <strong>35%</strong>
            <p>Improvement in API response speed after modernization.</p>
          </article>
          <article>
            <strong>40%</strong>
            <p>Reduction in mean time to recovery through CI/CD.</p>
          </article>
        </aside>
      </section>

      <div className="news-flash">
        <div className="page-width">
          <strong>In this edition</strong>
          <span>React &amp; TypeScript at public-sector scale</span>
          <span>WebGL for financial risk analysis</span>
          <span>From commit to OpenShift</span>
        </div>
      </div>
    </>
  );
}

function SectionHeader({ desk, number, title, description }) {
  return (
    <header className="section-header">
      <div className="section-header__meta"><span>{number}</span><span>{desk}</span></div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

function About() {
  return (
    <section className="paper-section page-width" id="about">
      <SectionHeader
        number="01"
        desk="Profile"
        title="A product mindset with engineering depth."
        description="Full-stack context. Frontend focus. Ownership from the first ambiguous requirement through production."
      />

      <div className="profile-layout">
        <article className="profile-copy">
          <p>
            Venu works across the stack to make complicated products feel straightforward.
            His experience spans public-sector systems, healthcare research, financial
            services, and enterprise SaaS—domains where reliability is not optional.
          </p>
          <p>
            The strongest work happens where architecture, browser performance, and user
            needs meet. That has meant leading framework migrations, profiling memory and
            rendering bottlenecks, defining REST contracts, and building repeatable paths
            to production.
          </p>
          <p>
            He holds a master’s degree in computer science and brings enough backend and
            delivery experience to make better frontend decisions: choices grounded in the
            whole system, not just the component tree.
          </p>
        </article>

        <blockquote>
          “The interface is where system complexity meets a real person. My job is to make
          that meeting feel clear, fast, and dependable.”
          <cite>— Venu Adimulam</cite>
        </blockquote>

        <aside className="editorial-note">
          <h3>What he brings</h3>
          <ul>
            <li>End-to-end feature ownership</li>
            <li>Performance-first frontend architecture</li>
            <li>Clear API and component contracts</li>
            <li>Code review and engineering mentorship</li>
            <li>Production and delivery awareness</li>
          </ul>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">Full profile on LinkedIn <Arrow /></a>
        </aside>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="paper-section career-desk" id="experience">
      <div className="page-width">
        <SectionHeader
          number="02"
          desk="Career Desk"
          title="A record of shipping consequential software."
          description="Five roles across government, healthcare, finance, enterprise SaaS, and client services."
        />

        <div className="career-list">
          {experience.map((item, index) => (
            <article className={`career-story ${index === 0 ? "career-story--lead" : ""}`} key={`${item.company}-${item.period}`}>
              <div className="career-date">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{item.period}</time>
                <small>{item.location}</small>
              </div>
              <div className="career-headline">
                <p>{item.company}</p>
                <h3>{item.role}</h3>
                <p className="career-summary">{item.summary}</p>
                <div className="technology-line">{item.stack.join(" · ")}</div>
              </div>
              <ul className="career-report">
                {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseGraphic({ index }) {
  if (index === 0) {
    return (
      <div className="case-graphic case-graphic--ledger" aria-hidden="true">
        <div className="ledger-header"><span>System overview</span><strong>Live</strong></div>
        <div className="ledger-stats">
          <div><small>UI stack</small><strong>React</strong></div>
          <div><small>API gain</small><strong>+35%</strong></div>
          <div><small>Services</small><strong>12</strong></div>
        </div>
        <div className="ledger-table">
          <div><span>Application shell</span><i style={{ width: "94%" }} /><b>Stable</b></div>
          <div><span>REST contracts</span><i style={{ width: "83%" }} /><b>JSON</b></div>
          <div><span>Release pipeline</span><i style={{ width: "76%" }} /><b>4 / wk</b></div>
          <div><span>Browser performance</span><i style={{ width: "88%" }} /><b>Profiled</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-graphic case-graphic--chart" aria-hidden="true">
      <div className="chart-header"><span>Photon risk engine</span><span>Live analytical view</span></div>
      <div className="chart-plot">
        <div className="chart-grid" />
        <svg viewBox="0 0 600 260" preserveAspectRatio="none">
          <path className="line-primary" d="M0 208 C58 200 75 118 140 135 S235 225 298 158 S386 50 445 91 S527 189 600 42" />
          <path className="line-secondary" d="M0 230 C75 223 124 186 183 201 S287 238 353 195 S482 127 600 150" />
        </svg>
        <span className="chart-point point-a" />
        <span className="chart-point point-b" />
        <span className="chart-point point-c" />
      </div>
      <div className="chart-caption"><span>Transaction throughput <b>+25%</b></span><span>Platform uptime <b>99.9%</b></span></div>
    </div>
  );
}

function Work() {
  return (
    <section className="paper-section page-width" id="work">
      <SectionHeader
        number="03"
        desk="Case Studies"
        title="Interfaces built for demanding work."
        description="Two production stories in high-scale application architecture, browser performance, and data-intensive visualization."
      />

      <div className="case-list">
        {projects.map((project, index) => (
          <article className="case-story" key={project.number}>
            <div className="case-copy">
              <div className="case-kicker"><span>{project.number}</span><span>{project.label}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong className="case-result">Result: {project.metric}</strong>
              <div className="case-stack">{project.stack.join(" / ")}</div>
            </div>
            <CaseGraphic index={index} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="paper-section technical-index" id="skills">
      <div className="page-width">
        <SectionHeader
          number="04"
          desk="Technical Index"
          title="The tools behind the reporting."
          description="A practical toolkit selected for the interface, system, and delivery problem at hand."
        />

        <div className="index-grid">
          {capabilities.map((group, index) => (
            <article key={group.title}>
              <div className="index-heading"><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3></div>
              <ol>
                {group.items.map((item, itemIndex) => (
                  <li key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span>{item}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="paper-section page-width" id="education">
      <SectionHeader
        number="05"
        desk="Education & Credentials"
        title="Strong foundations, continuously updated."
      />

      <div className="education-layout">
        <div className="degree-list">
          {education.map((item) => (
            <article key={item.school}>
              <span className="degree-mark">{item.monogram}</span>
              <div>
                <time>{item.period}</time>
                <h3>{item.degree}</h3>
                <p>{item.field}</p>
                <strong>{item.school}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="credential-list">
          <h3>Professional development</h3>
          {certifications.map((certificate, index) => (
            <a href={certificate.link} target="_blank" rel="noreferrer" key={certificate.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{certificate.title}</strong><small>{certificate.issuer} · {certificate.date}</small></div>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="classifieds" id="contact">
      <div className="page-width">
        <div className="classified-label"><span>Classifieds</span><span>Engineering opportunities</span></div>
        <div className="classified-main">
          <h2>Seeking the next consequential frontend challenge.</h2>
          <div>
            <p>
              For senior frontend roles, complex product work, or a conversation about
              browser performance and scalable systems, write directly.
            </p>
            <a className="email-link" href={socialLinks.email}>venu96gopal11@gmail.com <Arrow /></a>
          </div>
        </div>
        <div className="newspaper-footer">
          <strong>Venu Adimulam</strong>
          <div>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow /></a>
          </div>
          <span>© {new Date().getFullYear()} · End of edition</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
