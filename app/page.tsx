"use client";

import { useEffect, useMemo, useState } from "react";

const whatsappUrl =
  "https://wa.me/6285774130255?text=Halo%20Chaerudin%2C%20saya%20tertarik%20dengan%20portfolio%20Anda%20untuk%20peluang%20karier.";
const emailUrl =
  "mailto:chaerudinsaputra91@gmail.com?subject=Opportunity%20for%20Chaerudin%20Saputra&body=Halo%20Chaerudin%2C%0A%0ASaya%20melihat%20portfolio%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut.%0A%0ATerima%20kasih.";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  { value: "3.94", label: "GPA / 4.00" },
  { value: "Power BI", label: "BI Dashboard" },
  { value: "SQL", label: "Data Query" },
  { value: "AI", label: "RAG & Chatbot" },
];

const expertise = [
  {
    title: "Data Analytics & BI",
    description: "Data cleaning, transformation, validation, dashboarding, KPI reporting, and insight generation for business users.",
    tools: ["SQL", "Excel", "Power Query", "Power BI", "Tableau", "Looker"],
  },
  {
    title: "Business Analysis",
    description: "Process mapping, business requirement translation, stakeholder communication, and structured problem solving.",
    tools: ["Flowchart", "BRD", "UAT", "Excel", "Odoo", "Draw.io"],
  },
  {
    title: "Product QA & Data Migration",
    description: "Dataset comparison, source-target validation, bug documentation, and user acceptance testing support.",
    tools: ["QA", "Bug Report", "Data Validation", "Migration QC"],
  },
  {
    title: "AI & Data Science",
    description: "Machine learning prototypes, RAG-based chatbot thesis, NLP chatbot portfolio, and data science learning projects.",
    tools: ["Python", "Pandas", "Scikit-learn", "Gemini API", "RAG"],
  },
];

const experiences = [
  {
    role: "Data Analyst Intern - CCRM Division",
    company: "PT Pertamina (Persero)",
    period: "Mar 2025 - Aug 2025",
    focus: "Power BI, Power Query, KPI dashboard, data transformation",
    image: "/portfolio-images/page-09.jpg",
    bullets: [
      "Built and maintained interactive dashboards to support internal monitoring and data-driven reporting.",
      "Cleaned, transformed, and consolidated raw datasets using Excel and Power Query before visualization.",
      "Translated user needs into dashboard structures, KPI definitions, slicers, and visual storytelling.",
    ],
  },
  {
    role: "Business Analyst Intern",
    company: "OTO by CarDekho",
    period: "Nov 2025 - Feb 2026",
    focus: "Advanced Excel, process mapping, business logic validation",
    image: "/portfolio-images/page-13.jpg",
    bullets: [
      "Collected, cleaned, and validated business data using PivotTables and lookup formulas.",
      "Mapped business processes into clear flowcharts to identify operational pain points.",
      "Supported analysis and testing activities by comparing expected outcomes with actual data behavior.",
    ],
  },
  {
    role: "Product & Data Analyst - Project Based",
    company: "Ikatan Motor Indonesia",
    period: "Mar 2026 - Apr 2026",
    focus: "Data migration QC, QA testing, UAT documentation",
    image: "/portfolio-images/page-09.jpg",
    bullets: [
      "Compared source and target datasets to support data migration quality control.",
      "Documented QA findings, bug reproduction steps, and user acceptance testing notes for developers.",
      "Validated post-migration consistency to reduce missing, duplicated, or mismatched data risks.",
    ],
  },
  {
    role: "Data Science Trainee - MSIB Batch 7",
    company: "BISA AI Academy",
    period: "Sep 2024 - Dec 2024",
    focus: "Machine learning, chatbot, data visualization",
    image: "/portfolio-images/page-21.jpg",
    bullets: [
      "Developed machine learning portfolio projects using Python, Pandas, and scikit-learn.",
      "Built a mental health chatbot capstone using Gemini AI API and NLP concepts.",
      "Created visualization portfolios including sales performance dashboards and data science materials.",
    ],
  },
];

const projects = [
  {
    title: "Power BI CCRM Dashboard",
    category: "Business Intelligence",
    result: "Dashboard and reporting support during PT Pertamina internship.",
    image: "/portfolio-images/page-09.jpg",
    tags: ["Power BI", "Power Query", "Excel", "KPI"],
  },
  {
    title: "Academic FAQ Chatbot using RAG",
    category: "AI Thesis / HKI",
    result: "RAG-based academic chatbot for campus FAQ knowledge access and testing scenarios.",
    image: "/portfolio-images/page-12.jpg",
    tags: ["RAG", "Gemini AI", "Chatbot", "QA"],
  },
  {
    title: "Ekspora",
    category: "UNIIC Cambodia - First Place",
    result: "Export education platform concept with product pitch and prototype evidence.",
    image: "/portfolio-images/page-02.jpg",
    tags: ["Product", "Business Case", "Pitch Deck"],
  },
  {
    title: "Lestari",
    category: "UNIIC Uzbekistan - Third Place",
    result: "Accessible career and learning platform concept for Deaf community empowerment.",
    image: "/portfolio-images/page-03.jpg",
    tags: ["Product Strategy", "UI/UX", "Pitching"],
  },
  {
    title: "Mental Health Chatbot - Herada",
    category: "AI Chatbot",
    result: "Conversational AI prototype for initial mental health support and self-expression.",
    image: "/portfolio-images/page-22.jpg",
    tags: ["Gemini API", "NLP", "Chatbot"],
  },
  {
    title: "Heart Health Prediction Model",
    category: "Machine Learning",
    result: "Classification model portfolio using SVM and Python data science workflow.",
    image: "/portfolio-images/page-14.jpg",
    tags: ["Python", "SVM", "Scikit-learn"],
  },
  {
    title: "Academic PDF QA",
    category: "AI Product Prototype",
    result: "Prototype concept for document-based question answering from academic PDFs.",
    image: "/portfolio-images/page-17.jpg",
    tags: ["AI", "PDF QA", "Prototype"],
  },
  {
    title: "UI/UX Portfolio Collection",
    category: "UI/UX Design",
    result: "Mobile interface concepts including IndoWander, SG Childcare, and Sthuna Ternak.",
    image: "/portfolio-images/page-18.jpg",
    tags: ["Figma", "Mobile UI", "UX"],
  },
  {
    title: "Animals.ID",
    category: "UNIIC Indonesia - Top 10",
    result: "Pet care platform concept with mobile prototype and competition validation.",
    image: "/portfolio-images/page-04.jpg",
    tags: ["UI/UX", "Business Model", "Prototype"],
  },
];

const achievements = [
  "1st Place - International University Incubator Consortium Demo Day, Cambodia (2025)",
  "3rd Place - International UNIIC Hackathon, Uzbekistan (2025)",
  "2nd Place - International PakuBumi Open 12 Pencak Silat Championship (2024)",
  "2nd Place - Most Outstanding Student / PILMAPRES, University Level (2025)",
  "1st Place - National Paper Competition, BEM FTI Trisakti (2025)",
  "3rd Place - National Hackathon, Kalla Institute (2025)",
  "Top 5 - Gadjah Mada Entrepreneur Business Case Competition (2024)",
  "Finalist & Funded Recipient - Business Incubator Program LPPM Trisakti University (2025)",
  "Best Graduate and Cum Laude - Universitas Trisakti (2025/2026)",
];

const certifications = [
  "CertNexus Data Science Certification",
  "BISA AI Academy - Data Science, AI, Machine Learning, and Data Visualization",
  "Dicoding - Data Course Portfolio",
  "MySkill - Data Course Portfolio",
  "MySkill - Quality Assurance Course Portfolio",
  "HKI - Academic FAQ Chatbot based on Retrieval-Augmented Generation",
  "HKI - Functional and Non-Functional Application Testing Training Modules",
];

const organizations = [
  {
    role: "Vice President of Academic Affairs",
    organization: "Informatics Engineering Student Association",
    period: "Aug 2025 - Apr 2026",
  },
  {
    role: "Deputy Ministry of Social and Political Affairs",
    organization: "KEPRESMA Universitas Trisakti",
    period: "May 2024 - Nov 2025",
  },
  {
    role: "Research and Technology Staff",
    organization: "BEM FTI Universitas Trisakti",
    period: "Feb 2023 - Nov 2023",
  },
  {
    role: "Vice Chair",
    organization: "Pencak Silat UKM Universitas Trisakti",
    period: "Jan 2024 - Sep 2024",
  },
];

const gallery = [
  { page: 1, title: "Portfolio Cover", group: "Intro" },
  { page: 2, title: "UNIIC Cambodia - Ekspora", group: "Competition" },
  { page: 3, title: "UNIIC Uzbekistan - Lestari", group: "Competition" },
  { page: 4, title: "UNIIC Indonesia - Animals.ID", group: "Competition" },
  { page: 5, title: "Competition 2025", group: "Awards" },
  { page: 6, title: "Competition 2024", group: "Awards" },
  { page: 7, title: "Competition Collection", group: "Awards" },
  { page: 8, title: "Organization", group: "Leadership" },
  { page: 9, title: "Work Experience", group: "Experience" },
  { page: 10, title: "Thank You Slide", group: "Portfolio" },
  { page: 11, title: "Appendix", group: "Portfolio" },
  { page: 12, title: "Thesis, HKI & Others", group: "AI / Thesis" },
  { page: 13, title: "LinkedIn & CV Snapshot", group: "Profile" },
  { page: 14, title: "MSIB Data Science Portfolio", group: "Data" },
  { page: 15, title: "BPC / BCC Project Portfolio", group: "Business" },
  { page: 16, title: "BPC / BCC Project Portfolio", group: "Business" },
  { page: 17, title: "Lestari, Academic PDF QA, MoodMate", group: "Product" },
  { page: 18, title: "UI/UX Project Portfolio", group: "UI/UX" },
  { page: 19, title: "Design Portfolio", group: "Design" },
  { page: 20, title: "MSIB Certificates", group: "Certificates" },
  { page: 21, title: "Data Science Certificates", group: "Certificates" },
  { page: 22, title: "Chatbot & Data Certificates", group: "Certificates" },
  { page: 23, title: "Course Evidence", group: "Courses" },
  { page: 24, title: "Learning Summary", group: "Courses" },
  { page: 25, title: "Dicoding Data Course", group: "Courses" },
  { page: 26, title: "MySkill Data Course", group: "Courses" },
  { page: 27, title: "MySkill QA Course", group: "Courses" },
];

const galleryGroups = ["All", ...Array.from(new Set(gallery.map((item) => item.group)))];

type ImageFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  onOpen?: (src: string, alt: string) => void;
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function ImageFrame({ src, alt, caption, priority = false, onOpen }: ImageFrameProps) {
  const [broken, setBroken] = useState(false);

  return (
    <figure className="image-frame">
      {broken ? (
        <div className="image-fallback">
          <strong>Image not found</strong>
          <span>Upload file to:</span>
          <code>{src}</code>
        </div>
      ) : (
        <button
          type="button"
          className="image-button"
          onClick={() => onOpen?.(src, alt)}
          aria-label={`Open image: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onError={() => setBroken(true)}
          />
        </button>
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState("All");
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  const visibleGallery = useMemo(
    () => (activeGroup === "All" ? gallery : gallery.filter((item) => item.group === activeGroup)),
    [activeGroup]
  );

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .stagger-item"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chaerudin Saputra",
    jobTitle: "Data Analyst, Business Intelligence, Business Analyst, Product Analyst",
    address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
    email: "chaerudinsaputra91@gmail.com",
    telephone: "+6285774130255",
    url: "https://chaerudinsaputra-portofolio.vercel.app",
    sameAs: ["https://linkedin.com/in/chaerudin-saputra-40874a22a"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Trisakti" },
    knowsAbout: ["Data Analytics", "Business Intelligence", "Power BI", "SQL", "Python", "Business Analysis", "Product Quality Assurance", "Management Trainee"],
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="ambient-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Chaerudin Saputra Portfolio home" onClick={closeMenu}>
          <span>CS</span>
          <div>
            <strong>Chaerudin Saputra</strong>
            <small>Data Analyst Portfolio</small>
          </div>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Main navigation" className={`nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-only contact-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="hero-kicker">Available for Data Analyst • Business Analyst • Management Trainee</p>
            <h1>Data portfolio with business sense, AI projects, and leadership proof.</h1>
            <p className="hero-subtitle">
              Information Systems graduate from Universitas Trisakti with hands-on experience in Power BI dashboards, data validation,
              business process analysis, product QA, AI chatbot development, competition pitching, and student leadership.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Contact via WhatsApp
              </a>
              <a className="button button-light" href={emailUrl}>
                Send Email
              </a>
              <a className="button button-ghost" href="/assets/Chaerudin-Saputra-CV.docx" download>
                Download CV
              </a>
            </div>
            <div className="mini-contact">
              <a href="mailto:chaerudinsaputra91@gmail.com">chaerudinsaputra91@gmail.com</a>
              <span>•</span>
              <a href="tel:+6285774130255">+62 857-7413-0255</a>
              <span>•</span>
              <a href="https://linkedin.com/in/chaerudin-saputra-40874a22a" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-media reveal">
            <div className="orbit-card orbit-one">SQL</div>
            <div className="orbit-card orbit-two">BI</div>
            <div className="portfolio-screen">
              <ImageFrame
                src="/portfolio-images/page-01.jpg"
                alt="Chaerudin Saputra portfolio cover"
                priority
                onOpen={(src, alt) => setModal({ src, alt })}
              />
            </div>
            <div className="floating-note top-note">
              <strong>GPA 3.94/4.00</strong>
              <span>Information Systems</span>
            </div>
            <div className="floating-note bottom-note">
              <strong>Power BI • SQL • Python</strong>
              <span>Analytics toolkit</span>
            </div>
          </div>
        </section>

        <section className="metric-strip section-shell compact" aria-label="Profile highlights">
          {highlights.map((item, index) => (
            <div className="metric-card stagger-item" style={{ transitionDelay: `${index * 80}ms` }} key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="expertise" className="section-shell">
          <SectionHeading
            eyebrow="Expertise"
            title="Built for analyst roles, with business and leadership context."
            description="The content is structured for Data Analyst applications while keeping enough strategic, competition, and leadership evidence for Management Trainee roles."
          />
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="glass-card expertise-card stagger-item" style={{ transitionDelay: `${index * 85}ms` }} key={item.title}>
                <div className="card-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-row">
                  {item.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell muted-block">
          <SectionHeading eyebrow="Experience" title="Evidence-based experience in data, business, product, and AI." />
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-card stagger-item" style={{ transitionDelay: `${index * 100}ms` }} key={`${item.role}-${item.company}`}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-content">
                  <span className="period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="focus">{item.focus}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <ImageFrame src={item.image} alt={`${item.company} portfolio evidence`} onOpen={(src, alt) => setModal({ src, alt })} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Case-study cards with clickable proof images."
            description="Images use JPG and 16:9 contain mode, so Canva/PDF evidence stays visible. Click any image to view it larger."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card stagger-item" style={{ transitionDelay: `${index * 70}ms` }} key={project.title}>
                <ImageFrame src={project.image} alt={`${project.title} project evidence`} onOpen={(src, alt) => setModal({ src, alt })} />
                <div className="project-body">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.result}</p>
                  <div className="tag-row small-tags">
                    {project.tags.map((tag) => (
                      <em key={tag}>{tag}</em>
                    ))}
                  </div>
                  <a href={project.image} target="_blank" rel="noreferrer" className="text-link">
                    Open evidence →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-shell split-section muted-block">
          <div>
            <SectionHeading eyebrow="Achievements" title="Competition record, academic performance, and leadership proof." />
            <div className="achievement-list">
              {achievements.map((achievement, index) => (
                <div className="achievement-item stagger-item" style={{ transitionDelay: `${index * 45}ms` }} key={achievement}>
                  <span>✓</span>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="stacked-evidence">
            <ImageFrame src="/portfolio-images/page-05.jpg" alt="Competition achievements 2025" onOpen={(src, alt) => setModal({ src, alt })} />
            <ImageFrame src="/portfolio-images/page-06.jpg" alt="Competition achievements 2024" onOpen={(src, alt) => setModal({ src, alt })} />
          </div>
        </section>

        <section className="section-shell split-section">
          <div>
            <SectionHeading eyebrow="Certifications" title="Learning evidence across data, AI, visualization, and QA." />
            <div className="cert-list">
              {certifications.map((item) => (
                <p className="stagger-item" key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="certificate-grid">
            <ImageFrame src="/portfolio-images/page-20.jpg" alt="MSIB certificates" onOpen={(src, alt) => setModal({ src, alt })} />
            <ImageFrame src="/portfolio-images/page-21.jpg" alt="Data science certificates" onOpen={(src, alt) => setModal({ src, alt })} />
            <ImageFrame src="/portfolio-images/page-22.jpg" alt="Chatbot and data certificates" onOpen={(src, alt) => setModal({ src, alt })} />
            <ImageFrame src="/portfolio-images/page-25.jpg" alt="Dicoding data course" onOpen={(src, alt) => setModal({ src, alt })} />
          </div>
        </section>

        <section className="section-shell muted-block">
          <SectionHeading eyebrow="Organization" title="Leadership experiences for Management Trainee and cross-functional roles." />
          <div className="organization-grid">
            {organizations.map((item, index) => (
              <article className="organization-card stagger-item" style={{ transitionDelay: `${index * 80}ms` }} key={item.role}>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </article>
            ))}
          </div>
          <ImageFrame src="/portfolio-images/page-08.jpg" alt="Organization portfolio evidence" onOpen={(src, alt) => setModal({ src, alt })} />
        </section>

        <section id="gallery" className="section-shell">
          <SectionHeading
            eyebrow="Full Portfolio Gallery"
            title="All Canva/PDF pages included with filter and modal preview."
            description="Replace JPG files in public/portfolio-images with Canva exports using the same filenames if you want to update the visuals."
          />
          <div className="filter-row" aria-label="Gallery filters">
            {galleryGroups.map((group) => (
              <button
                type="button"
                key={group}
                className={activeGroup === group ? "is-active" : ""}
                onClick={() => setActiveGroup(group)}
              >
                {group}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {visibleGallery.map((item, index) => {
              const src = `/portfolio-images/page-${String(item.page).padStart(2, "0")}.jpg`;
              return (
                <article className="gallery-card stagger-item" style={{ transitionDelay: `${Math.min(index, 8) * 45}ms` }} key={`${item.page}-${item.title}`}>
                  <ImageFrame src={src} alt={item.title} onOpen={(imageSrc, alt) => setModal({ src: imageSrc, alt })} />
                  <div className="gallery-body">
                    <span>{item.group} • Page {item.page}</span>
                    <strong>{item.title}</strong>
                    <a href={src} target="_blank" rel="noreferrer">Open image</a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell upload-guide muted-block">
          <SectionHeading
            eyebrow="Image Guide"
            title="Want to insert your own Canva images?"
            description="Export from Canva as JPG or PNG, rename the files, and put them in the folder below. No code edit is needed when filenames stay the same."
          />
          <div className="guide-grid">
            <div className="guide-card">
              <strong>1. Export from Canva</strong>
              <p>Choose JPG or PNG. Use 16:9 landscape size for best result.</p>
            </div>
            <div className="guide-card">
              <strong>2. Rename file</strong>
              <p>Example: Work Experience = <code>page-09.jpg</code>, Ekspora = <code>page-02.jpg</code>.</p>
            </div>
            <div className="guide-card">
              <strong>3. Replace folder</strong>
              <p>Move the file into <code>public/portfolio-images/</code> and redeploy to Vercel.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell">
          <div className="contact-panel reveal">
            <p className="eyebrow">Contact</p>
            <h2>Interested in discussing a role, internship, MT program, or collaboration?</h2>
            <p>
              Reach out directly through WhatsApp, email, LinkedIn, phone, or the downloadable portfolio/CV links.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Now
              </a>
              <a className="button button-light" href={emailUrl}>
                Email Chaerudin
              </a>
              <a className="button button-ghost" href="https://linkedin.com/in/chaerudin-saputra-40874a22a" target="_blank" rel="noreferrer">
                Open LinkedIn
              </a>
            </div>
            <div className="contact-grid">
              <a href="mailto:chaerudinsaputra91@gmail.com">
                <small>Email</small>
                <strong>chaerudinsaputra91@gmail.com</strong>
              </a>
              <a href="tel:+6285774130255">
                <small>Phone</small>
                <strong>+62 857-7413-0255</strong>
              </a>
              <a href="/assets/Chaerudin-Saputra-Portfolio.pdf" target="_blank" rel="noreferrer">
                <small>Portfolio PDF</small>
                <strong>Open full PDF</strong>
              </a>
              <a href="/assets/Chaerudin-Saputra-CV.docx" download>
                <small>Resume</small>
                <strong>Download CV</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Chaerudin on WhatsApp">
        <span>✦</span> WhatsApp
      </a>

      <footer className="footer">
        <p>© 2026 Chaerudin Saputra. Data Analyst Portfolio built with Next.js and deployed on Vercel.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {modal ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={modal.alt} onClick={() => setModal(null)}>
          <button type="button" className="modal-close" onClick={() => setModal(null)} aria-label="Close image preview">
            ×
          </button>
          <img src={modal.src} alt={modal.alt} />
        </div>
      ) : null}
    </>
  );
}
