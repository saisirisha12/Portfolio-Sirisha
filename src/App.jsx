import "./index.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const skillGroups = [
  {
    title: "LANGUAGES",
    items: ["Java", "Core & Advanced JavaScript / TypeScript", "Python & SQL"],
  },
  {
    title: "BACKEND",
    items: [
      "Spring Boot & Microservices",
      "REST APIs & OpenAPI",
      "Hibernate & JPA",
    ],
  },
  {
    title: "CLOUD & DATA",
    items: [
      "AWS S3, EC2, Lambda",
      "PostgreSQL & MongoDB",
      "Docker & Kubernetes",
    ],
  },
];

const experience = [
  {
    company: "Fidelity Investments",
    role: "Software Engineer",
    period: "2021 – 2023",
    bullets: [
      "Architected cloud-native microservices in Java and Spring Boot for high-availability financial data platforms.",
      "Tuned database queries and CI/CD pipelines, trimming response times and deployment overhead.",
      "Partnered with product and design to ship features that worked as well for analysts as for end customers.",
    ],
  },
  {
    company: "ICICI Lombard",
    role: "Software Engineer",
    period: "2019 – 2021",
    bullets: [
      "Led full-stack workflow automation that cut manual claims processing time by roughly 40%.",
      "Designed resilient database schemas serving millions of policy records at sub-second latency.",
      "Modernized legacy modules by carrying them into a React-based frontend architecture.",
    ],
  },
];

const projects = [
  {
    title: "Kanbas LMS",
    description:
      "A full-stack learning management system built with the MERN stack, with modular course navigation and live grading.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stock Portfolio Simulator",
    description:
      "A Java + Spring Boot simulator that models investment strategies against real-time market data.",
    image:
      "https://images.unsplash.com/photo-1642790551116-18e150f248e4?auto=format&fit=crop&w=900&q=80",
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
    degree: "B.Tech in Computer Science",
    location: "Manipal, India",
  },
];

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            Sai Sirisha
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
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
              Hi! I'm <span>Sai Sirisha Volety</span>
            </h1>

            <p className="hero-copy">
              I am a recent Computer Science graduate from Northeastern
              University with nearly three years of experience across
              Java/Spring Boot backends, React and Angular interfaces, and
              enterprise applications in finance and insurance.
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
    href="https://github.com/your-github-username"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/your-linkedin-username"
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
            <h2>A quiet, detail-led builder.</h2>

            <p>
              I think the best software is a little like a well-made object:
              sturdy, intentional, and rewarding the closer you look. My work
              pairs the rigor of an MSCS at Northeastern with an engineer&apos;s
              instinct for the small decisions that shape an entire experience.
            </p>

            <p>
              I&apos;m a problem solver who likes understanding the business
              before writing the first line. Empathetic with people, exacting
              with code. Off-screen, you&apos;ll usually find me with a book, a
              slow coffee, or a dog at my feet.
            </p>
          </div>

          <div
            className="about-image"
            aria-label="Book and coffee by a window"
          />
        </section>

        <section className="skills-section">
          <h2>Technical arsenal</h2>

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

        <section className="experience-section">
          <h2>Professional chapter</h2>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-dot" />

                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{item.company}</h3>
                    </div>

                    <p>
                      {item.role} · {item.period}
                    </p>
                  </div>

                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="projects-section">
          <h2>Selected works</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />

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
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <p>Boston, MA</p>
          </div>
        </section>
      </main>
    </>
  );
}
