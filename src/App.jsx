import { useState } from "react";
import "./index.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const skillGroups = [
  {
    title: "LANGUAGES",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C#", "C++", "SQL"],
  },
  {
    title: "FRONTEND",
    items: ["React", "Angular", "Next.js", "Redux", "HTML/CSS", "Bootstrap"],
  },
  {
    title: "BACKEND & APIS",
    items: [
      "Spring Boot",
      "Node.js",
      "ASP.NET MVC",
      "REST APIs",
      "Microservices",
      "OpenAPI/Swagger",
    ],
  },
  {
    title: "DATABASES",
    items: ["Oracle", "PostgreSQL", "MongoDB", "MySQL", "Aerospike"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: [
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "TESTING & TOOLS",
    items: [
      "JUnit",
      "Postman",
      "Unit Testing",
      "Integration Testing",
      "Figma",
      "Agile",
    ],
  },
];

const experience = [
  {
    company: "Fidelity Investments",
    role: "Software Engineer Co-op",
    period: "July 2025 – Jan 2026",
    summary:
      "Worked on enterprise financial technology platforms supporting portfolio analytics, investment management workflows, and AI-enabled user experiences. Contributed across backend APIs, frontend modernization, database integrations, and secure access workflows.",
    bullets: [
      "Engineered scalable Java Spring Boot microservices and RESTful APIs supporting high-volume financial analytics and investment management workflows.",
      "Built database-agnostic API layers integrating Aerospike, PostgreSQL, and Oracle, improving data retrieval efficiency and system scalability.",
      "Modernized internal applications using Angular 18 and Backend-for-Frontend architecture, reducing redundant API calls by 30% and improving frontend responsiveness by 20%.",
      "Designed secure authentication, authorization, session management, caching, and role-based access workflows supporting 500+ enterprise users.",
      "Developed extensible API and integration layers supporting AI-driven chatbot and voice-assistant workflows for intelligent portfolio construction.",
    ],
  },
  {
    company: "ICICI Lombard",
    role: "Software Engineer",
    period: "Feb 2021 – Nov 2023",
    summary:
      "Built and supported full-stack enterprise applications for policy booking, payment processing, backend services, and cloud-supported production systems. Worked across frontend, backend, APIs, databases, deployments, and production troubleshooting.",
    bullets: [
      "Led end-to-end development of scalable enterprise applications using Java, C#, ASP.NET MVC, JavaScript, and Oracle SQL, reducing policy booking time by 25%.",
      "Engineered RESTful APIs and integrated third-party payment gateways, improving transaction reliability and reducing duplicate payment and policy issuance issues.",
      "Developed secure backend services with authentication, authorization, token handling, API validation, and reusable service components.",
      "Redesigned Oracle SQL database workflows using indexing and query optimization to improve performance and support increased transaction volumes.",
      "Deployed and supported production services on AWS EC2, RDS, and S3, improving scalability, availability, and deployment efficiency.",
      "Mentored interns and new hires through debugging support, onboarding, code reviews, and knowledge-sharing sessions.",
    ],
  },
];

const projects = [
    {
    title: "Kanbas LMS",
    description:
      "A full-stack learning management system inspired by Canvas, with course navigation, assignments, modules, and user workflows.",
    stack: "React · Node.js · Next.js",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stock Portfolio Simulator",
    description:
      "A Java-based simulator for modeling portfolios, transactions, and investment strategies using object-oriented design and unit-tested workflows.",
    stack: "Java · OOP · JUnit",
    image:
      "https://images.unsplash.com/photo-1642790551116-18e150f248e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smarter Code Search",
    description:
      "A hybrid retrieval system for developer queries combining BM25 lexical search and CodeBERT semantic search, evaluated using precision, recall, and MRR.",
    stack: "Python · CodeBERT · BM25 · CodeSearchNet",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
  },
];

const education = [
  {
    label: "GRADUATE",
    school: "Northeastern University",
    degree: "MS in Computer Science · GPA 3.91",
    location: "Boston, MA",
  },
  {
    label: "UNDERGRADUATE",
    school: "Manipal Institute of Technology",
    degree: "B.Tech in Electronics and Communication · GPA 3.6",
    location: "Manipal, India",
  },
];

export default function App() {
  const [openExperience, setOpenExperience] = useState(null);

  function toggleExperience(company) {
    setOpenExperience((current) => (current === company ? null : company));
  }

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            Sai Sirisha
          </a>

          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <main className="site-shell">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="status-pill">· OPEN TO FULL-TIME OPPORTUNITIES</p>

            <h1>
              Hi, I&apos;m <span>Sai Sirisha Volety</span>
            </h1>

            <p className="hero-copy">
              I&apos;m a Software Engineer with a Master&apos;s in Computer
              Science from Northeastern University and nearly three years of
              experience building full-stack applications across finance and
              insurance. My work spans Java/Spring Boot backends, React and
              Angular interfaces, RESTful APIs, databases, and production-ready
              enterprise systems.
            </p>

            <a
              className="resume-button"
              href="/SaiSirisha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>

            <div className="hero-socials" aria-label="Social links">
              <a
                href="https://github.com/saisirisha12"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sai-sirisha-volety-810791187/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:saisirisha1299@gmail.com" aria-label="Email">
                <MdOutlineEmail />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-grid">
          <div className="section-copy">
            <h2>About Me</h2>

            <p>
              I like building software that feels thoughtful from the inside
              out. Clean structure, reliable behavior, and small design
              decisions all matter because they shape the experience people
              ultimately rely on. As a Software Engineer and recent MSCS
              graduate from Northeastern, I build full-stack applications,
              backend services, and data-driven systems with that same mindset.
            </p>

            <p>
              I&apos;m a problem solver who likes understanding the business
              before writing the first line of code. I care about clean
              architecture, thoughtful user experiences, and the engineering
              details that make a product reliable, maintainable, and genuinely
              useful. Outside of engineering, I enjoy painting, dancing, and
              singing, which keep me creative and bring balance into the way I
              work.
            </p>
          </div>

          <div className="about-image">
            <img src="/Photo.png" alt="Animated coding illustration" />
          </div>
        </section>

        <section className="skills-section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <p>{group.title}</p>

                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <p className="section-kicker">Professional Work</p>
          <h2>Professional Experience</h2>

          <div className="timeline">
            {experience.map((item) => {
              const isOpen = openExperience === item.company;

              return (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-dot" />

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.company}</h3>
                      <p className="experience-meta">
                        {item.role} · {item.period}
                      </p>
                    </div>

                    <p className="experience-summary">{item.summary}</p>

                    <button
                      className={`experience-toggle ${isOpen ? "open" : ""}`}
                      type="button"
                      onClick={() => toggleExperience(item.company)}
                      aria-expanded={isOpen}
                    >
                      <span>{isOpen ? "Hide details" : "View details"}</span>
                      <span className="toggle-arrow">↓</span>
                    </button>

                    <div
                      className={`experience-details ${isOpen ? "open" : ""}`}
                    >
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <p className="section-kicker">Personal Work</p>
          <h2>Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />

                <p className="project-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section">
          {education.map((item) => (
            <article key={item.school}>
              <p className="section-label">{item.label}</p>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.location}</span>
            </article>
          ))}
        </section>

        <section id="contact" className="contact-section">
          <div>
            <h2>
              Let&apos;s build something <span>meaningful</span> together.
            </h2>
          </div>

          <div className="contact-links">
            <a className="say-hello" href="mailto:saisirisha1299@gmail.com">
              Say hello ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sai-sirisha-volety-810791187/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/saisirisha12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <p>Boston, MA</p>
          </div>
        </section>
      </main>
    </>
  );
}