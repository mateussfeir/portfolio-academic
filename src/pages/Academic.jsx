import { Button, Pill, Section } from "../components/PortfolioUI";
import bitbalanceImg from "../assets/bitbalance-preview.jpeg";

const academicProjects = [
  {
    title: "BitBalance",
    description:
      "Full-stack financial data platform built with Django and REST APIs. Integrates real-time stock and crypto data, calculates portfolio value, and visualizes asset allocation through interactive charts.",
    stack: ["Django", "Python", "REST APIs", "PostgreSQL"],
    githubHref: "https://github.com/mateussfeir/Portfolio_tracker",
    imageSrc: bitbalanceImg,
    imageAlt: "BitBalance screenshot",
  },
  {
    title: "Capstone Project",
    description:
      "A hair salon booking system designed to simplify appointment scheduling, service management, and customer communication.",
    stack: ["React", "Node.js", "Scheduling Logic", "UI Design"],
    githubHref: "https://github.com/GustavoMiranda2/T36_COMP3078_W26",
  },
  {
    title: "JavaFX Application",
    description:
      "A desktop application built with JavaFX to practice event-driven programming, structured UI development, and object-oriented design.",
    stack: ["Java", "JavaFX", "OOP", "Scene Builder"],
    githubHref: null,
  },
  {
    title: "PHP/MySQL Project",
    description:
      "A web application focused on user registration, login workflows, session management, and secure database integration.",
    stack: ["PHP", "MySQL", "Authentication", "Sessions"],
    githubHref: null,
  },
  {
    title: "Cybersecurity Lab",
    description:
      "A practical lab project covering input validation, defensive coding, and mitigation strategies for common web vulnerabilities.",
    stack: ["Security Testing", "Validation", "Web Security", "OWASP"],
    githubHref: null,
  },
];

const capstoneSections = [
  {
    title: "Project Summary",
    body: "This capstone project is a salon booking platform intended to streamline client appointments, manage stylist availability, and reduce manual scheduling overhead for a growing service business.",
  },
  {
    title: "Project Vision",
    body: "The vision is to deliver an accessible, modern booking experience that supports both customer convenience and operational efficiency. The platform is planned as a practical business application with room for future reporting and loyalty features.",
  },
  {
    title: "Business Requirements",
    body: "Core requirements include customer account management, appointment booking, cancellation workflows, service selection, availability tracking, and administrative visibility into schedules and bookings.",
  },
  {
    title: "Project Plan",
    body: "The implementation plan is organized into discovery, requirements gathering, interface planning, development, testing, and deployment preparation. Placeholder milestones are being used while the full project schedule is finalized.",
  },
  {
    title: "Requirements Analysis & Design",
    body: "Current analysis focuses on user roles, appointment lifecycle rules, service categories, and validation requirements. The design process includes entity relationships, booking flows, and interface states for clients and staff.",
  },
  {
    title: "Wireframes / Mockups",
    body: "Wireframes and UI mockups will document the homepage, booking flow, service detail screens, authentication, and administrative schedule management. Visual assets can be inserted here as the project documentation evolves.",
  },
  {
    title: "Status Reports",
    body: "Status reporting will summarize weekly progress, completed deliverables, blockers, and upcoming milestones. This section is structured to support ongoing updates throughout the capstone lifecycle.",
  },
  {
    title: "System Implementation",
    body: "Implementation will cover frontend booking workflows, backend scheduling logic, data persistence, validation, and deployment-ready configuration. Placeholder documentation is included until the final technical build is complete.",
  },
];

const ProjectCard = ({ title, description, stack, githubHref, imageSrc, imageAlt }) => (
  <article className="card academic-project-card">
    {imageSrc ? (
      <img src={imageSrc} alt={imageAlt} className="academic-project-image" />
    ) : (
      <div className="project-placeholder" aria-hidden="true">
        <span>{title}</span>
      </div>
    )}
    <div className="academic-project-copy">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="pill-row">
        {stack.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
      {githubHref ? (
        <a className="link project-link" href={githubHref} target="_blank" rel="noreferrer">
          GitHub Repository →
        </a>
      ) : (
        <span className="link project-link">Repository available upon request</span>
      )}
    </div>
  </article>
);

function Academic() {
  return (
    <>
      <header className="hero card fade-up" style={{ "--delay": "0ms" }}>
        <div className="academic-hero">
          <div className="academic-hero-content">
            <div className="hero-content academic-hero-copy">
              <p className="eyebrow">COMP3078 Portfolio Development Project</p>
              <h1>
                <span className="name-accent">Academic Portfolio</span>
              </h1>
              <h2>Programming and Analysis</h2>
              <p className="subtitle">
                This page collects academic credentials, course projects,
                capstone planning artifacts, and experience relevant to software
                development and data-focused roles.
              </p>
            </div>
          </div>
        </div>
      </header>

      <Section title="Personal Data" className="fade-up">
        <div className="info-grid">
          <article className="card info-panel">
            <h4>Bio</h4>
            <p>
              I am a Toronto-based developer currently completing the Advanced
              Diploma in Programming and Analysis at George Brown College. My
              academic work has centered on full-stack development, backend
              systems, database design, and applied software engineering
              practices.
            </p>
            <p>
              Through coursework and independent projects, I have focused on
              building practical applications that translate business needs into
              reliable technical solutions. I am especially interested in web
              platforms, data-driven products, and systems that require clear
              structure, clean architecture, and strong validation.
            </p>
            <p>
              My goal is to continue growing as a junior software developer or
              data analyst by contributing to teams that value thoughtful
              implementation, continuous learning, and measurable user impact.
            </p>
            <div className="button-row">
              <Button href="/resume.pdf" external={false} download>
                Download Resume
              </Button>
            </div>
          </article>

          <article className="card info-panel">
            <h4>Cover Letter</h4>
            <p>
              Dear Hiring Manager, I am applying for a Junior Software
              Developer or Data Analyst opportunity where I can contribute my
              academic training, project experience, and problem-solving mindset
              to a collaborative technical team.
            </p>
            <p>
              My background in Programming and Analysis has given me experience
              with application development, database systems, validation, and
              project planning. I enjoy breaking down business requirements into
              clear technical tasks and building solutions that are organized,
              maintainable, and useful in real-world contexts.
            </p>
            <p>
              I would welcome the opportunity to bring my adaptability,
              communication skills, and hands-on development experience to an
              organization focused on strong software delivery and meaningful
              outcomes.
            </p>
          </article>
        </div>

        <article className="card info-panel philosophy-panel">
          <h4>Career Philosophy</h4>
          <p>
            I approach technology as a discipline of clarity and service. Good
            software should solve a real problem, be understandable to the next
            developer, and create confidence for the people who depend on it.
          </p>
          <p>
            As I develop professionally, I want to keep strengthening both my
            technical depth and my ability to collaborate across teams. I value
            steady improvement, practical execution, and delivering work that is
            dependable rather than superficial.
          </p>
        </article>
      </Section>

      <Section title="Academic Credentials" className="fade-up">
        <article className="card credential-card">
          <h4>George Brown College</h4>
          <p>Advanced Diploma - Programming and Analysis</p>
          <p>Expected Graduation: April 2026</p>
        </article>
      </Section>

      <Section title="Academic Work" className="fade-up">
        <div className="academic-project-grid">
          {academicProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section title="Capstone Project" className="fade-up">
        <div className="capstone-grid">
          {capstoneSections.map((section) => (
            <article key={section.title} className="card capstone-card">
              <h4>{section.title}</h4>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Professional Summary" className="fade-up">
        <article className="card info-panel">
          <p>
            Backend-focused Software Developer with hands-on experience building
            scalable web applications and data-driven systems using Python,
            Django, and REST APIs. Strong foundation in data structures,
            algorithms, object-oriented programming, and database design.
          </p>
          <p>
            Experienced in developing full-stack applications, integrating
            external APIs, and maintaining production systems. Focused on clean
            architecture, reliable backend logic, and building systems that
            solve real-world problems.
          </p>
          <h4>Web Developer | WEB2MIDIA (2022 - Present)</h4>
          <p>
            - Developed responsive web applications using React, HTML, CSS, and
            JavaScript
            <br />
            - Integrated backend services and REST APIs
            <br />
            - Collaborated with designers and stakeholders
            <br />
            - Optimized performance and responsiveness
            <br />
            - Used Git and CI/CD workflows
          </p>
          <h4>Civil Engineer | Plano&amp;Plano (2015 - 2019)</h4>
          <p>
            - Led multidisciplinary teams on infrastructure projects
            <br />
            - Managed timelines, budgets, and technical requirements
            <br />
            - Developed strong problem-solving and systems-thinking skills
          </p>
        </article>
      </Section>
    </>
  );
}

export default Academic;
