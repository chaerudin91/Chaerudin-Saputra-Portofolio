const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Organization", href: "#organization" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3.94/4.00", label: "GPA Information Systems" },
  { value: "10+", label: "Selected awards & recognitions" },
  { value: "5+", label: "Data, BI, AI & product projects" },
  { value: "520", label: "TOEFL score" },
];

const skills = [
  {
    title: "Data Analysis",
    items: ["SQL", "Advanced Excel", "Power Query", "Data Cleaning", "Data Validation", "KPI Reporting"],
  },
  {
    title: "BI & Visualization",
    items: ["Power BI", "Tableau", "Google Looker", "Dashboard Design", "Reporting Automation"],
  },
  {
    title: "Programming & AI",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Gemini AI API", "RAG Concept"],
  },
  {
    title: "Business & Product",
    items: ["Business Process Mapping", "UAT", "Bug Reporting", "Data Migration QC", "Stakeholder Communication"],
  },
];

const experiences = [
  {
    role: "Data Analyst Intern — CCRM Division",
    company: "PT Pertamina (Persero)",
    period: "Mar 2025 – Aug 2025",
    image: "/portfolio-images/page-09.webp",
    bullets: [
      "Developed interactive Power BI dashboards to support internal risk and operational analysis.",
      "Cleaned, transformed, and consolidated raw datasets using Power Query and Excel before dashboard modeling.",
      "Translated stakeholder reporting needs into dashboard structures, KPI definitions, filters, and visual layouts.",
    ],
  },
  {
    role: "Business Analyst Intern",
    company: "OTO by CarDekho",
    period: "Nov 2025 – Feb 2026",
    image: "/portfolio-images/page-13.webp",
    bullets: [
      "Collected, cleaned, and validated business datasets using Advanced Excel, PivotTables, and lookup formulas.",
      "Mapped business processes into flowcharts to identify pain points and recommend practical improvements.",
      "Supported business logic testing by comparing expected outcomes with actual data and documenting findings.",
    ],
  },
  {
    role: "Product & Data Analyst — Project-Based",
    company: "Ikatan Motor Indonesia",
    period: "Mar 2026 – Apr 2026",
    image: "/portfolio-images/page-09.webp",
    bullets: [
      "Conducted data migration quality control by comparing source and target datasets in Excel.",
      "Supported product QA and UAT by recording bugs, writing reproduction steps, and communicating issues to developers.",
      "Validated post-migration data consistency to reduce the risk of missing, duplicated, or misaligned records.",
    ],
  },
  {
    role: "Data Science Trainee — MSIB Batch 7",
    company: "BISA AI Academy",
    period: "Sep 2024 – Dec 2024",
    image: "/portfolio-images/page-21.webp",
    bullets: [
      "Built machine learning classification models using Python, Pandas, and scikit-learn.",
      "Developed a mental health chatbot capstone using Gemini AI API and NLP concepts.",
      "Created a sales performance dashboard in Google Looker to visualize revenue and product trends.",
    ],
  },
];

const projects = [
  {
    title: "Academic FAQ Chatbot using RAG",
    category: "AI / Thesis / HKI",
    image: "/portfolio-images/page-12.webp",
    description:
      "RAG-based academic chatbot concept designed to answer campus FAQ questions using structured knowledge sources and testing scenarios.",
    tools: ["RAG", "Gemini AI", "Knowledge Base", "QA Testing"],
  },
  {
    title: "Power BI CCRM Dashboard",
    category: "Business Intelligence",
    image: "/portfolio-images/page-09.webp",
    description:
      "Dashboard work during internship to support data monitoring, reporting, and internal risk or operational analysis.",
    tools: ["Power BI", "Power Query", "Excel", "KPI"],
  },
  {
    title: "Sales Performance Dashboard",
    category: "Data Visualization",
    image: "/portfolio-images/page-14.webp",
    description:
      "Looker dashboard portfolio for summarizing sales performance, product trends, and business indicators.",
    tools: ["Google Looker", "Data Studio", "Dashboard"],
  },
  {
    title: "Mental Health Chatbot — Sahabat untuk Berbagi",
    category: "AI Chatbot",
    image: "/portfolio-images/page-22.webp",
    description:
      "Capstone chatbot prototype for initial mental health support using conversational AI and NLP concepts.",
    tools: ["Gemini AI API", "NLP", "Chatbot"],
  },
  {
    title: "Heart Health Prediction Model",
    category: "Machine Learning",
    image: "/portfolio-images/page-14.webp",
    description:
      "Classification model portfolio using SVM and Python for heart health risk prediction practice.",
    tools: ["Python", "SVM", "Scikit-learn", "Classification"],
  },
  {
    title: "Ekspora",
    category: "UNIIC Cambodia — First Place",
    image: "/portfolio-images/page-02.webp",
    description:
      "Export education platform concept presented at UNIIC Cambodia and awarded first place in 2025.",
    tools: ["Product Concept", "Pitch Deck", "Business Case"],
  },
  {
    title: "Lestari",
    category: "UNIIC Uzbekistan — Third Place",
    image: "/portfolio-images/page-03.webp",
    description:
      "Inclusive career and learning platform concept focused on empowering the Deaf community through accessible opportunities.",
    tools: ["Product Strategy", "UI/UX", "Pitching"],
  },
  {
    title: "Animals.ID",
    category: "UNIIC Indonesia — Top 10",
    image: "/portfolio-images/page-04.webp",
    description:
      "Pet care and animal service platform concept with mobile app prototype and competition validation.",
    tools: ["UI/UX", "Business Model", "Prototype"],
  },
  {
    title: "Academic PDF QA",
    category: "AI / Product Prototype",
    image: "/portfolio-images/page-17.webp",
    description:
      "Prototype concept for document-based question answering to help users extract answers from academic PDF materials.",
    tools: ["AI", "PDF QA", "Prototype"],
  },
  {
    title: "MoodMate",
    category: "Mobile Product Concept",
    image: "/portfolio-images/page-17.webp",
    description:
      "Mobile app concept related to mood tracking, self-reflection, and supportive user experience design.",
    tools: ["UI/UX", "Mobile App", "Product Design"],
  },
  {
    title: "UI/UX Portfolio Collection",
    category: "Design",
    image: "/portfolio-images/page-18.webp",
    description:
      "Selected UI/UX works including IndoWander, SG Childcare, and Sthuna Ternak mobile interface concepts.",
    tools: ["Figma", "UI/UX", "Mobile Design"],
  },
  {
    title: "Design Portfolio Collection",
    category: "Visual Design",
    image: "/portfolio-images/page-19.webp",
    description:
      "Selected poster, visual communication, and presentation design works created for academic and organizational needs.",
    tools: ["Canva", "Visual Design", "Presentation"],
  },
];

const achievements = [
  "1st Place — International University Incubator Consortium Demo Day, Cambodia (2025)",
  "3rd Place — International UNIIC Hackathon, Uzbekistan (2025)",
  "2nd Place — International PakuBumi Open 12 Pencak Silat Championship (2024)",
  "2nd Place — Most Outstanding Student / PILMAPRES, University Level (2025)",
  "1st Place — National Paper Competition, BEM FTI Trisakti (2025)",
  "3rd Place — National Hackathon, Kalla Institute (2025)",
  "Top 5 — Gadjah Mada Entrepreneur Business Case Competition (2024)",
  "Finalist and Funded Participant — Business Incubator Program LPPM Trisakti University (2025)",
  "Best Graduate and Cum Laude — Universitas Trisakti (2025/2026)",
];

const certifications = [
  "CertNexus Data Science Certification",
  "BISA AI Academy — AI, Machine Learning, Data Visualization & Advanced Analytics Training",
  "Dicoding — Data Course Portfolio",
  "MySkill — Data Course Portfolio",
  "MySkill — Quality Assurance Course Portfolio",
  "HKI — Academic FAQ Chatbot based on Retrieval-Augmented Generation",
  "HKI — Functional Application Testing Training Module",
  "HKI — Non-Functional Application Testing Training Module",
];

const organizations = [
  {
    role: "Vice President of Academic Affairs",
    org: "Informatics Engineering Student Association",
    period: "Aug 2025 – Apr 2026",
  },
  {
    role: "Deputy Ministry of Social and Political Affairs",
    org: "KEPRESMA Universitas Trisakti",
    period: "May 2024 – Nov 2025",
  },
  {
    role: "Research and Technology Staff",
    org: "BEM FTI Universitas Trisakti",
    period: "Feb 2023 – Nov 2023",
  },
  {
    role: "Vice Chair",
    org: "Pencak Silat UKM Universitas Trisakti",
    period: "Jan 2024 – Sep 2024",
  },
];

const gallery = [
  { title: "Portfolio Cover", page: 1 },
  { title: "UNIIC Cambodia — Ekspora", page: 2 },
  { title: "UNIIC Uzbekistan — Lestari", page: 3 },
  { title: "UNIIC Indonesia — Animals.ID", page: 4 },
  { title: "Competition 2025", page: 5 },
  { title: "Competition 2024", page: 6 },
  { title: "Competition 2024 Collection", page: 7 },
  { title: "Organization", page: 8 },
  { title: "Work Experience", page: 9 },
  { title: "Closing Slide", page: 10 },
  { title: "Appendix", page: 11 },
  { title: "Thesis, HKI & Others", page: 12 },
  { title: "LinkedIn & CV Snapshot", page: 13 },
  { title: "MSIB Data Science Portfolio", page: 14 },
  { title: "BPC / BCC Project Portfolio", page: 15 },
  { title: "BPC / BCC Project Portfolio", page: 16 },
  { title: "Product Project Portfolio", page: 17 },
  { title: "UI/UX Project Portfolio", page: 18 },
  { title: "Design Portfolio", page: 19 },
  { title: "MSIB Certificates", page: 20 },
  { title: "Data Science Certificates", page: 21 },
  { title: "Chatbot & Data Certificates", page: 22 },
  { title: "Course Evidence", page: 23 },
  { title: "Learning Summary", page: 24 },
  { title: "Dicoding Data Course", page: 25 },
  { title: "MySkill Data Course", page: 26 },
  { title: "MySkill QA Course", page: 27 },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Chaerudin Saputra Portfolio">
          <span>CS</span>
          <div>
            <strong>Chaerudin Saputra</strong>
            <small>Data Analyst Portfolio</small>
          </div>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero section-padded">
        <div className="hero-copy">
          <p className="eyebrow">Information Systems Graduate • Jakarta, Indonesia</p>
          <h1>Data Analyst & Business Intelligence Portfolio</h1>
          <p className="hero-text">
            I help transform raw data into clean dashboards, business insights, and practical decisions. My background combines data analytics, product QA, business process improvement, AI projects, and leadership experience for Data Analyst, Business Analyst, and Management Trainee roles.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn secondary" href="/assets/Chaerudin-Saputra-CV.docx" download>Download CV</a>
            <a className="btn ghost" href="/assets/Chaerudin-Saputra-Portfolio.pdf" target="_blank" rel="noreferrer">Open PDF Portfolio</a>
          </div>
          <div className="contact-line">
            <a href="mailto:chaerudinsaputra91@gmail.com">chaerudinsaputra91@gmail.com</a>
            <span>•</span>
            <a href="https://linkedin.com/in/chaerudin-saputra-40874a22a" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/portfolio-images/page-01.webp" alt="Portfolio cover of Chaerudin Saputra" />
        </div>
      </section>

      <section className="stats section-padded compact">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="about" className="section-padded two-column">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Profile built for analytics, business, and leadership roles."
            description="This section can be used as the first impression for recruiters before they open the detailed CV."
          />
        </div>
        <div className="about-card">
          <p>
            I am an Information Systems graduate from Universitas Trisakti with a strong academic record and experience in data analytics, business intelligence, product quality validation, and business process improvement. I work with SQL, Python, Advanced Excel, Power Query, Power BI, Tableau, and Google Looker to clean data, build dashboards, validate datasets, and turn business questions into actionable insights.
          </p>
          <p>
            Beyond analytics, I have experience leading academic programs, joining national and international competitions, and developing AI or product-based projects. This combination makes my portfolio relevant for Data Analyst, Business Analyst, Product Analyst, and Management Trainee opportunities.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <SectionHeading
          eyebrow="Core Skills"
          title="A practical toolkit for data-driven business problems."
        />
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <div className="tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-padded muted-section">
        <SectionHeading
          eyebrow="Experience"
          title="Internship and project experience with analytics, BI, QA, and business analysis exposure."
        />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.company}-${experience.role}`}>
              <div className="experience-content">
                <span className="period">{experience.period}</span>
                <h3>{experience.role}</h3>
                <p className="company">{experience.company}</p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <img src={experience.image} alt={`${experience.company} portfolio evidence`} />
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-padded">
        <SectionHeading
          eyebrow="Projects"
          title="Selected portfolio projects from data, AI, product, and UI/UX."
          description="Replace the images in public/portfolio-images when you have cleaner exports from Canva, Figma, Power BI, or project screenshots."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} project preview`} />
              <div className="project-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags compact-tags">
                  {project.tools.map((tool) => (
                    <em key={tool}>{tool}</em>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="section-padded two-column muted-section">
        <div>
          <SectionHeading
            eyebrow="Achievements"
            title="Selected awards that strengthen both analyst and management trainee positioning."
          />
          <img className="feature-image" src="/portfolio-images/page-05.webp" alt="Competition awards from portfolio" />
        </div>
        <div className="list-card">
          {achievements.map((item) => (
            <div className="list-item" key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section-padded">
        <SectionHeading
          eyebrow="Certifications & Courses"
          title="Learning evidence across data science, analytics, AI, and QA."
        />
        <div className="cert-layout">
          <div className="list-card">
            {certifications.map((item) => (
              <div className="list-item" key={item}>
                <span>•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="cert-images">
            <img src="/portfolio-images/page-20.webp" alt="MSIB certificates" />
            <img src="/portfolio-images/page-21.webp" alt="Data science certificates" />
          </div>
        </div>
      </section>

      <section id="organization" className="section-padded muted-section">
        <SectionHeading
          eyebrow="Organization"
          title="Leadership experience for cross-functional and management trainee roles."
        />
        <div className="org-grid">
          {organizations.map((org) => (
            <article className="org-card" key={`${org.role}-${org.org}`}>
              <span>{org.period}</span>
              <h3>{org.role}</h3>
              <p>{org.org}</p>
            </article>
          ))}
        </div>
        <img className="wide-image" src="/portfolio-images/page-08.webp" alt="Organization portfolio slide" />
      </section>

      <section id="gallery" className="section-padded">
        <SectionHeading
          eyebrow="Portfolio Gallery"
          title="Full Canva/PDF portfolio gallery."
          description="This gallery keeps all uploaded portfolio pages visible. You can later replace each image with cleaner screenshots or exported project images."
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
            <a className="gallery-card" href={`/portfolio-images/page-${String(item.page).padStart(2, "0")}.webp`} target="_blank" rel="noreferrer" key={`${item.page}-${item.title}`}>
              <img src={`/portfolio-images/page-${String(item.page).padStart(2, "0")}.webp`} alt={item.title} />
              <div>
                <span>Page {item.page}</span>
                <strong>{item.title}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section-padded contact-section">
        <SectionHeading
          eyebrow="Contact"
          title="Open for Data Analyst, Business Analyst, Product Analyst, and Management Trainee opportunities."
        />
        <div className="contact-card">
          <a href="mailto:chaerudinsaputra91@gmail.com">chaerudinsaputra91@gmail.com</a>
          <a href="tel:+6285774130255">+62 857-7413-0255</a>
          <a href="https://linkedin.com/in/chaerudin-saputra-40874a22a" target="_blank" rel="noreferrer">linkedin.com/in/chaerudin-saputra-40874a22a</a>
          <a href="https://chaerudinsaputra-portofolio.vercel.app" target="_blank" rel="noreferrer">chaerudinsaputra-portofolio.vercel.app</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Chaerudin Saputra. Built with Next.js for Vercel deployment.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
