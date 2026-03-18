import { Link } from "react-router-dom";

const baseUrl = import.meta.env.BASE_URL || "/";

const joinWithBase = (path) => {
  const normalizedPath = path === "/" ? "" : path.replace(/^\//, "");
  return `${baseUrl}${normalizedPath}`;
};

export const Button = ({
  href,
  children,
  variant = "secondary",
  external = true,
  download = false,
}) => (
  <a
    className={`button ${variant}`}
    href={external ? href : joinWithBase(href)}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    download={download}
  >
    {children}
  </a>
);

export const Pill = ({ children }) => <span className="pill">{children}</span>;

export const Section = ({ title, children, className = "" }) => (
  <section className={`section ${className}`.trim()}>
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

export const NavBar = ({ currentPath }) => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Academic Portfolio", href: "/academic" },
  ];

  return (
    <nav className="top-nav card fade-up" aria-label="Primary">
      <Link className="brand-mark" to="/">
        Mateus Sfeir
      </Link>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={`nav-link ${currentPath === item.href ? "active" : ""}`.trim()}
            to={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
