import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Academic from "./pages/Academic";
import { Button, NavBar, Pill, Section } from "./components/PortfolioUI";

const ProjectCard = ({ title, description, href, linkText }) => (
  <a
    className="card project-card featured-project"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <div className="project-copy">
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="link">{linkText}</span>
    </div>
    <img
      src={`${import.meta.env.BASE_URL}bitbalance-preview.jpeg`}
      alt="BitBalance dashboard preview"
      className="project-preview-image"
    />
  </a>
);

const HomePage = () => (
  <>
    <header className="hero card fade-up" style={{ "--delay": "0ms" }}>
      <div className="hero-media">
        <img
          src={`${import.meta.env.BASE_URL}mateus.jpeg`}
          alt="Mateus Sfeir"
          className="avatar"
        />
      </div>
      <div className="hero-content">
        <p className="eyebrow">Hello, I am</p>
        <h1>
          <span className="name-accent">Mateus Sfeir</span>
        </h1>
        <h2>Software Engineer</h2>
        <p className="subtitle">
          I build data-driven web products with Python, Django, and modern
          JavaScript - focused on clean backend systems and real-world
          problems.
        </p>
        <div className="button-row">
          <Button href="https://github.com/mateussfeir">GitHub</Button>
          <Button href="https://www.linkedin.com/in/mateus-sfeir-b65393152/">
            LinkedIn
          </Button>
          <Button href="https://www.bitbalance.ca" variant="primary">
            BitBalance <span className="button-arrow">→</span>
          </Button>
          <Button href="mailto:mateussfeir@hotmail.com" variant="secondary">
            Email me <span className="button-arrow">→</span>
          </Button>
        </div>
      </div>
    </header>

    <Section title="Featured Project" className="fade-up">
      <ProjectCard
        title="BitBalance"
        description="Portfolio and net worth tracker built with Django and Python. Uses external APIs with caching and analytics for clear, real-time insights."
        href="https://www.bitbalance.ca"
        linkText="View Live Demo →"
      />
    </Section>

    <Section title="Tech Stack" className="fade-up">
      <div className="pill-row">
        <Pill>Python</Pill>
        <Pill>Django</Pill>
        <Pill>SQL</Pill>
        <Pill>REST APIs</Pill>
        <Pill>React</Pill>
        <Pill>Git/GitHub</Pill>
        <Pill>PostgreSQL</Pill>
      </div>
    </Section>

    <Section title="About Me">
      <p className="about">
        I am a Toronto-based software engineer focused on backend systems and
        fintech products. I enjoy turning complex data into tools people can
        trust and use every day.
      </p>
    </Section>
  </>
);

function App() {
  const location = useLocation();

  return (
    <div className="page">
      <main className="container">
        <NavBar currentPath={location.pathname} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academic" element={<Academic />} />
        </Routes>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Mateus Sfeir</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
