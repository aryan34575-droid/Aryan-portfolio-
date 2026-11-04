"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Download, Mail, Phone, Linkedin, Github,
  Sun, Moon, Menu, X, Search, ExternalLink, Database, FileSpreadsheet,
  ChartNoAxesCombined, Code2, GraduationCap, Award, MapPin, Target,
  Activity, PanelTop, Workflow, Eye, Layers3
} from "lucide-react";

const projects = [
  {
    id: "arya",
    type: "Data Analytics",
    year: "2026",
    title: "Aryan Data Analyst",
    subtitle: "Data analysis workflow & reporting",
    desc: "A practical analytics project focused on structuring the workflow from data inspection and preparation through exploratory analysis and reporting.",
    question: "How can a repeatable workflow make spreadsheet-based analysis clearer and less manual?",
    method: [
      "Inspect Excel and CSV datasets",
      "Prepare and clean data for analysis",
      "Explore patterns, KPIs and anomalies",
      "Communicate findings through visual outputs"
    ],
    deliverable: "A project repository describing an analytics workflow and its intended capabilities. Review the source code and documentation for implementation details.",
    tools: ["Python", "Pandas", "Excel / CSV", "Data Visualization"],
    url: "https://github.com/aryan34575-droid/Aryan-Data-Analyst",
    icon: "chart"
  },
  {
    id: "tata",
    type: "Financial Analysis",
    year: "2025",
    title: "Tata Motors · FY23–FY25",
    subtitle: "Three-year financial performance review",
    desc: "An independent analysis of publicly disclosed financial information, structured around year-on-year movement, business performance and key financial indicators.",
    question: "What changed across FY23–FY25, and how can the movement in key indicators be communicated clearly?",
    method: [
      "Organise publicly disclosed financial information",
      "Compare three financial years",
      "Review key indicators and year-on-year movement",
      "Document observations with source context"
    ],
    deliverable: "An independent financial-analysis case study with supporting project files. This work is not affiliated with or endorsed by Tata Motors.",
    tools: ["Excel", "Financial Analysis", "KPI Review", "YoY Trends"],
    url: "https://github.com/aryan34575-droid/tata-motors-fy23-fy25-data-analysis",
    icon: "finance"
  },
  {
    id: "forage",
    type: "Industry Simulation",
    year: "2026",
    title: "Tata iQ · GenAI Data Analytics",
    subtitle: "Forage · completed job simulation",
    desc: "A completed industry job simulation covering exploratory data analysis, delinquency risk profiling, AI-supported prediction and business storytelling for collections strategy.",
    question: "How can exploratory data analysis and AI-assisted work help stakeholders understand potential delinquency risk?",
    method: [
      "Explore the dataset and risk profile",
      "Work through AI-supported delinquency prediction tasks",
      "Prepare business reporting and data storytelling",
      "Develop an AI-driven collections strategy proposal"
    ],
    deliverable: "Completed the Tata iQ GenAI-Powered Data Analytics job simulation on Forage on 2 November 2026. This is a learning simulation—not employment or a paid internship.",
    tools: ["EDA", "GenAI", "Risk Analysis", "Business Insights"],
    url: "https://www.theforage.com/simulations/tata-iq/gen-ai-powered-data-analytics-2c4m",
    icon: "ai"
  }
];

const certificates = [
  {
    id: "forage",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata iQ · Forage",
    date: "2 November 2026",
    img: "/certificates/tata-iq-forage.png",
    pdf: "/certificates/tata-iq-forage.pdf",
    verify: "https://www.theforage.com/simulations/tata-iq/gen-ai-powered-data-analytics-2c4m",
    detail: "Exploratory data analysis and risk profiling · Predicting delinquency with AI · Business report and data storytelling · AI-driven collections strategy."
  },
  {
    id: "codewithharry",
    title: "Ultimate Job-Ready AI-Powered Data Analytics Course",
    issuer: "CodeWithHarry",
    date: "4 September 2026",
    img: "/certificates/codewithharry.png",
    pdf: "/certificates/codewithharry-data-analytics.pdf",
    verify: "",
    detail: "Course completion certificate for the Ultimate Job-Ready AI-Powered Data Analytics Course."
  },
  {
    id: "be10x",
    title: "AI Tools & Claude Workshop",
    issuer: "Be10x",
    date: "29 March 2026",
    img: "/certificates/be10x.png",
    pdf: "/certificates/be10x-ai-tools-workshop.pdf",
    verify: "",
    detail: "Workshop covering AI-assisted presentations, data analysis, coding and debugging workflows."
  }
];

const skillGroups = [
  {
    name: "Business Intelligence",
    desc: "Reporting & visualisation",
    items: ["Power BI", "Dashboard Design", "KPI Reporting"]
  },
  {
    name: "Data & Querying",
    desc: "Working with structured data",
    items: ["SQL", "Data Cleaning", "Exploratory Analysis"]
  },
  {
    name: "Programming & Spreadsheets",
    desc: "Analysis & workflow foundations",
    items: ["Python", "Pandas", "Excel"]
  }
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);
  const [cert, setCert] = useState<string | null>(null);

  const filters = [
    "All",
    "Data Analytics",
    "Financial Analysis",
    "Industry Simulation"
  ];

  const visible = useMemo(
    () =>
      projects.filter(
        p =>
          (filter === "All" || p.type === filter) &&
          `${p.title} ${p.desc} ${p.tools.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [filter, query]
  );

  const selected = projects.find(p => p.id === active);
  const selectedCert = certificates.find(c => c.id === cert);

  return (
    <main className={dark ? "app dark" : "app"}>
      <aside className="rail">
        <a className="monogram" href="#home">A</a>
        <nav>
          <a className="rail-link active" href="#home" title="Home"><PanelTop /></a>
          <a className="rail-link" href="#projects" title="Projects"><Layers3 /></a>
          <a className="rail-link" href="#skills" title="Skills"><Activity /></a>
          <a className="rail-link" href="#certifications" title="Certifications"><Award /></a>
          <a className="rail-link" href="#contact" title="Contact"><Mail /></a>
        </nav>
        <span className="rail-bottom">©26</span>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <a className="wordmark" href="#home">
            <b className="brand-mark">A</b>
            <span>
              ARYAN PORTFOLIO
              <small>DATA ANALYST & PROBLEM SOLVER</small>
            </span>
          </a>

          <nav className={menu ? "topnav open" : "topnav"}>
            {["Home", "About", "Projects", "Skills", "Certifications", "Resume", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="top-actions">
            <button
              className="icon-btn"
              onClick={() => setDark(!dark)}
              aria-label="Toggle colour theme"
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <a
              className="resume-btn"
              href="/Aryan-resume.pdf"
              download="Aryan-Mishra-Resume.pdf"
            >
              <Download size={15} /> Download Resume
            </a>

            <button
              className="icon-btn mobile-menu"
              onClick={() => setMenu(!menu)}
              aria-label="Toggle navigation"
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        <div className="content" id="home">
          <section className="hero" id="overview">
            <div className="hero-copy">
              <div className="overline">
                <span className="live-dot" />
                DATA ANALYST PORTFOLIO
                <span className="overline-year">2026 / INDIA</span>
              </div>

              <h1>Hi, I’m <em>Aryan Mishra</em></h1>

              <h2 className="hero-roles">
                Data Analyst <i /> Business Analyst <i /> Data Enthusiast
              </h2>

              <p className="hero-intro">
                A Mathematics graduate with a passion for turning data into
                meaningful insights. I work across data preparation,
                exploratory analysis, dashboards and clear business reporting.
              </p>

              <div className="hero-ctas">
                <a className="button dark-button" href="#projects">
                  Explore my work <ArrowUpRight size={16} />
                </a>
                <a
                  className="button outline-button"
                  href="/Aryan-resume.pdf"
                  target="_blank"
                >
                  View resume <Download size={16} />
                </a>
              </div>

              <div className="social-row">
                <a href="https://www.linkedin.com/in/aryan-mishra-817101413" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://github.com/aryan34575-droid" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="mailto:aryan34575@gmail.com" aria-label="Email"><Mail /></a>
                <a href="tel:+919648261916" aria-label="Phone"><Phone /></a>
              </div>
            </div>

            <div className="hero-person">
              <div className="hero-photo">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-04%20at%207.28.20%20PM-kd8Pt3cor9G1H2vTcVLlvrhwsEjKwC.jpeg"
                  alt="Aryan Mishra portrait"
                  fill
                  priority
                  sizes="(max-width:760px) 80vw, 420px"
                />
              </div>

              <div className="floating-card what-card">
                <b>What I do</b>
                <span><ChartNoAxesCombined /> Data Analysis & EDA</span>
                <span><Activity /> Business Insights</span>
                <span><PanelTop /> Dashboard & Reporting</span>
                <span><Workflow /> AI for Data Workflows</span>
              </div>

              <div className="floating-card highlight-card">
                <b>Key Highlights</b>
                <div className="highlight-grid">
                  <span><strong>3+</strong>Projects</span>
                  <span><strong>4+</strong>Tools</span>
                  <span><strong>1</strong>Industry Simulation</span>
                  <span><strong>B.Sc.</strong>Mathematics · 2024</span>
                </div>
              </div>

              <div className="photo-caption">
                ARYAN MISHRA <span>· DATA ANALYTICS</span>
              </div>
            </div>
          </section>

          <section className="value-strip">
            <div><Target /><span><b>Analyze</b><small>Turn raw data into insights</small></span></div>
            <div><Layers3 /><span><b>Visualize</b><small>Create interactive dashboards</small></span></div>
            <div><Activity /><span><b>Recommend</b><small>Support better decisions</small></span></div>
            <div><Workflow /><span><b>Build</b><small>Practical data solutions</small></span></div>
          </section>

          <section className="section-block" id="projects">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2>Featured <em>projects.</em></h2>
                <p>Explore the work, tools, process and project documentation.</p>
              </div>
              <span className="section-count">03 PROJECTS <ArrowUpRight size={14} /></span>
            </div>

            <div className="project-controls">
              <div className="filter-tabs">
                {filters.map(f => (
                  <button
                    key={f}
                    className={filter === f ? "filter active" : "filter"}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <label className="search-box">
                <Search size={16} />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search projects or tools"
                  aria-label="Search projects"
                />
              </label>
            </div>

            <div className="project-grid">
              {visible.map((p, i) => (
                <article className="project-card" key={p.id}>
                  <div className={`project-visual visual-${p.icon}`}>
                    <div className="visual-top">
                      <span>PROJECT / 0{i + 1}</span>
                      <span>{p.year}</span>
                    </div>

                    {p.icon === "chart" ? (
                      <div className="mini-dashboard">
                        <div className="dash-title">
                          ANALYTICS OVERVIEW <span>● ● ●</span>
                        </div>
                        <div className="dash-kpis">
                          <div><small>PREPARE</small><b>01</b></div>
                          <div><small>EXPLORE</small><b>02</b></div>
                          <div><small>INSIGHT</small><b>03</b></div>
                        </div>
                        <div className="chart-bars">
                          {[30, 44, 38, 68, 54, 77, 62, 90, 72, 100, 81, 93].map((v, j) => (
                            <i key={j} style={{ height: `${v}%` }} />
                          ))}
                        </div>
                        <div className="dash-foot">
                          <span>DATA</span><span>ANALYSIS</span><span>REPORT</span>
                        </div>
                      </div>
                    ) : p.icon === "finance" ? (
                      <div className="finance-visual">
                        <span className="finance-kicker">FINANCIAL REVIEW</span>
                        <strong>FY23 <i /> FY25</strong>
                        <div className="line-chart">
                          <svg viewBox="0 0 320 110" role="img" aria-label="Illustrative trend line, not financial data">
                            <path
                              d="M5 88 C35 74 45 79 75 58 S120 72 150 45 S200 62 230 25 S280 42 315 8"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            />
                          </svg>
                        </div>
                        <span className="finance-caption">YEAR-ON-YEAR REVIEW</span>
                      </div>
                    ) : (
                      <div className="ai-visual">
                        <div className="ai-orbit">TATA <b>iQ</b></div>
                        <strong>GENAI + ANALYTICS</strong>
                        <span>RISK PROFILING / BUSINESS REPORT</span>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-type">
                      <span>{p.type}</span><span>{p.year}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <h4>{p.subtitle}</h4>
                    <p>{p.desc}</p>

                    <div className="tool-tags">
                      {p.tools.map(t => <span key={t}>{t}</span>)}
                    </div>

                    <div className="project-actions">
                      <button onClick={() => setActive(p.id)}>
                        View case study <ArrowRight size={15} />
                      </button>
                      <a href={p.url} target="_blank" rel="noreferrer">
                        <Github size={17} /> Repository / Link <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visible.length === 0 && (
              <div className="no-results">
                No matching projects. Try another search or category.
              </div>
            )}
          </section>

          <section className="capability-section" id="skills">
            <div className="section-head">
              <div>
                <span className="eyebrow">02 / TOOLKIT</span>
                <h2>Skills & <em>tools.</em></h2>
                <p>Core tools and practical working areas.</p>
              </div>
            </div>

            <div className="capability-grid">
              {skillGroups.map((g, i) => (
                <article className="capability-card" key={g.name}>
                  <span className="cap-number">0{i + 1}</span>
                  <div className="cap-icon">
                    {i === 0 ? <ChartNoAxesCombined /> : i === 1 ? <Database /> : <Code2 />}
                  </div>
                  <h3>{g.name}</h3>
                  <p>{g.desc}</p>
                  <div className="cap-tags">
                    {g.items.map(x => <span key={x}>{x}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="tool-ribbon">
              <span><FileSpreadsheet /> Excel</span>
              <span><ChartNoAxesCombined /> Power BI</span>
              <span><Database /> SQL</span>
              <span><Code2 /> Python</span>
              <span><Target /> EDA</span>
            </div>
          </section>

          <section className="about-education" id="about">
            <article className="about-card">
              <span className="eyebrow">03 / ABOUT ME</span>
              <h2>Grounded in maths.<br /><em>Driven by questions.</em></h2>
              <p>
                I’m Aryan Mishra, a data analytics enthusiast with a background
                in Mathematics. I enjoy working with datasets, finding patterns,
                building dashboards and turning analysis into clear business recommendations.
              </p>

              <div className="about-facts">
                <span><MapPin /> Prayagraj, Uttar Pradesh, India</span>
                <span><Mail /> aryan34575@gmail.com</span>
                <span><Phone /> +91 9648261916</span>
                <a href="https://www.linkedin.com/in/aryan-mishra-817101413" target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn profile <ArrowUpRight />
                </a>
                <a href="https://github.com/aryan34575-droid" target="_blank" rel="noreferrer">
                  <Github /> github.com/aryan34575-droid <ArrowUpRight />
                </a>
              </div>
            </article>

            <article className="education-card">
              <span className="eyebrow">ACADEMIC FOUNDATION</span>
              <div className="edu-icon"><GraduationCap /></div>
              <h3>B.Sc. in Mathematics</h3>
              <p>Nandini Educational Institute, Gonda, Uttar Pradesh, India</p>
              <div className="edu-meta">
                <span>Graduated 2024</span><strong>76.71%</strong>
              </div>
              <div className="edu-note">
                A quantitative foundation supporting structured thinking,
                analytical reasoning and problem solving.
              </div>
            </article>
          </section>

          <section className="section-block cert-section" id="certifications">
            <div className="section-head">
              <div>
                <span className="eyebrow">04 / VERIFIED LEARNING</span>
                <h2>Certifications & <em>training.</em></h2>
                <p>Open a certificate to preview the original document or view its available credential link.</p>
              </div>
              <span className="section-count">03 CERTIFICATES <Award size={15} /></span>
            </div>

            <div className="cert-grid">
              {certificates.map(c => (
                <article className="cert-card" key={c.id}>
                  <button
                    className="cert-image"
                    onClick={() => setCert(c.id)}
                    aria-label={`Preview ${c.title}`}
                  >
                    <Image
                      src={c.img}
                      alt={`${c.title} certificate`}
                      fill
                      sizes="(max-width:760px) 90vw, 30vw"
                    />
                    <span><Eye /> Preview certificate</span>
                  </button>

                  <div className="cert-info">
                    <div className="cert-meta">
                      <span>{c.issuer}</span><span>{c.date}</span>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.detail}</p>

                    <div className="cert-actions">
                      <button onClick={() => setCert(c.id)}>
                        View certificate <Eye size={15} />
                      </button>
                      <a href={c.pdf} target="_blank" rel="noreferrer">
                        Open PDF <ExternalLink size={14} />
                      </a>
                      {c.verify && (
                        <a href={c.verify} target="_blank" rel="noreferrer">
                          Credential <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-panel" id="resume">
            <div>
              <span className="eyebrow">05 / RESUME</span>
              <h2>Want the concise version?</h2>
              <p>Open the resume in your browser or download a copy for your records.</p>
            </div>
            <div className="resume-actions">
              <a className="button outline-button" href="/Aryan-resume.pdf" target="_blank" rel="noreferrer">
                Preview resume <Eye size={16} />
              </a>
              <a className="button dark-button" href="/Aryan-resume.pdf" download="Aryan-Mishra-Resume.pdf">
                Download PDF <Download size={16} />
              </a>
            </div>
          </section>

          <section className="contact-banner" id="contact">
            <div>
              <span className="eyebrow">06 / CONTACT</span>
              <h2>Let’s work <em>together.</em></h2>
              <p>
                Open to entry-level Data Analyst, Business Analyst, BI,
                MIS and reporting opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button light-button" href="mailto:aryan34575@gmail.com?subject=Opportunity%20for%20Aryan%20Mishra">
                Get in touch <ArrowUpRight size={17} />
              </a>
              <a href="tel:+919648261916"><Phone /> +91 9648261916</a>
              <a href="mailto:aryan34575@gmail.com"><Mail /> aryan34575@gmail.com</a>
              <a href="https://www.linkedin.com/in/aryan-mishra-817101413" target="_blank" rel="noreferrer">
                <Linkedin /> Connect on LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

          <footer className="footer">
            <a className="wordmark" href="#home">
              <b className="brand-mark">A</b>
              <span>ARYAN PORTFOLIO<small>DATA ANALYST & PROBLEM SOLVER</small></span>
            </a>
            <span>© 2026 Aryan Mishra · Portfolio</span>
            <a href="#home">Back to top ↑</a>
          </footer>
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <section
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close case study">
              <X />
            </button>
            <span className="eyebrow">CASE STUDY / {selected.type.toUpperCase()}</span>
            <h2 id="case-title">{selected.title}</h2>
            <p className="modal-lead">{selected.desc}</p>

            <div className="case-detail">
              <span>THE QUESTION</span>
              <p>{selected.question}</p>
            </div>

            <div className="case-detail">
              <span>APPROACH</span>
              <ol>
                {selected.method.map(x => <li key={x}>{x}</li>)}
              </ol>
            </div>

            <div className="case-detail">
              <span>DELIVERABLE & SCOPE</span>
              <p>{selected.deliverable}</p>
            </div>

            <div className="tool-tags">
              {selected.tools.map(x => <span key={x}>{x}</span>)}
            </div>

            <a className="button dark-button modal-link" href={selected.url} target="_blank" rel="noreferrer">
              Open project link <ArrowUpRight size={16} />
            </a>
          </section>
        </div>
      )}

      {selectedCert && (
        <div className="modal-backdrop" onClick={() => setCert(null)}>
          <section
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-title"
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setCert(null)} aria-label="Close certificate">
              <X />
            </button>
            <span className="eyebrow">CERTIFICATE / ORIGINAL UPLOAD</span>
            <h2 id="cert-title">{selectedCert.title}</h2>

            <div className="cert-modal-image">
              <Image
                src={selectedCert.img}
                alt={`${selectedCert.title} certificate full preview`}
                fill
                sizes="90vw"
              />
            </div>

            <p>{selectedCert.issuer} · {selectedCert.date}</p>

            <div className="cert-actions">
              <a href={selectedCert.pdf} target="_blank" rel="noreferrer">
                Open original PDF <ExternalLink size={14} />
              </a>
              {selectedCert.verify && (
                <a href={selectedCert.verify} target="_blank" rel="noreferrer">
                  View credential page <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
