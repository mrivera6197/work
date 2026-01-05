import { useEffect, useState } from 'react';
import { useDarkModeContext } from '../hooks/DarkModeProvider';
import Projects from './Projects';
import profilePhoto from '../images/IMG_2184.JPG';

const Landing = () => {
  const [section, setSection] = useState('home');
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">Mali Rivera</div>
          <nav className="nav">
            <button
              className={`nav-link ${section === 'home' ? 'active' : ''}`}
              onClick={() => setSection('home')}
            >
              About
            </button>
            <button
              className={`nav-link ${section === 'projects' ? 'active' : ''}`}
              onClick={() => setSection('projects')}
            >
              Projects
            </button>
            <a
              href="https://www.linkedin.com/in/mali-rivera-41832a12b/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mrivera6197"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {section === 'home' && <HomeSection onViewProjects={() => setSection('projects')} />}
      {section === 'projects' && <Projects />}
      
      {/* Footer */}
      <footer className="footer portfolio-container">
        <p className="footer-text">© 2025 Mali Rivera</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mali-rivera-41832a12b/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mrivera6197"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.biorxiv.org/content/10.1101/2022.05.17.491668v1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Publication
          </a>
        </div>
      </footer>
    </div>
  );
};

const HomeSection = ({ onViewProjects }) => {
  return (
    <main className="portfolio-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Senior Software Engineer</p>
          <h1 className="hero-title">
            From the lab bench to the codebase
          </h1>
        </div>
      </section>

      {/* About with Photo */}
      <section className="section">
        <div className="about-intro">
          <div className="about-text">
            <p className="about-lead">
              Founding engineer building AI-powered products from the ground up.
            </p>
            <div className="about-body">
              <p>
                Based in NYC, I'm currently the first engineering hire at an AI search startup—architecting 
                Go microservices, building React frontends, and shipping ML-powered features end-to-end. 
                I thrive in zero-to-one environments where I can own the full stack and move fast.
              </p>
              <p>
                I'm drawn to health tech. Before engineering, I worked in clinical trials and biotech, 
                and I've seen firsthand how much impact good software can have on patient care. 
                That background shapes how I approach problems—methodical, curious, always experimenting.
              </p>
              <p>
                Outside of work: running, movies, and being outdoors as much as possible.
              </p>
            </div>
            <div className="hero-links" style={{ marginTop: '0.5rem' }}>
              <a
                href="https://www.linkedin.com/in/mali-rivera-41832a12b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/mrivera6197"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                GitHub →
              </a>
              <a
                href="https://www.biorxiv.org/content/10.1101/2022.05.17.491668v1"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                SARS-CoV-2 Publication →
              </a>
            </div>
          </div>
          <div className="photo-container">
            <img 
              src={profilePhoto} 
              alt="Mali Rivera" 
              className="profile-photo"
            />
            <p className="photo-caption">Brooklyn, NY</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-list">
          <article className="experience-item fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="experience-period">2025 — Present</span>
            <div className="experience-content">
              <h3>Founding Software Engineer</h3>
              <p className="experience-company">Refine Technology Inc · New York, NY</p>
              <p className="experience-description">
                First engineering hire at AI-powered e-commerce search startup. Architecting Go microservices 
                on GCP/Kubernetes, building the merchant dashboard in React/Next.js, and leading ML experimentation 
                with vector databases and embedding models. Owning everything from infrastructure to UX.
              </p>
            </div>
          </article>
          <article className="experience-item fade-up" style={{ animationDelay: '0.15s' }}>
            <span className="experience-period">2023 — 2025</span>
            <div className="experience-content">
              <h3>Software Engineer</h3>
              <p className="experience-company">Moyae · Health Tech</p>
              <p className="experience-description">
                Core engineer on a small team building healthcare software. Designed Redis-based sync systems, 
                integrated e-prescribing APIs, and built FHIR-compliant data pipelines. The kind of work where 
                you see the direct impact on patient care.
              </p>
            </div>
          </article>
          <article className="experience-item fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="experience-period">2021 — 2022</span>
            <div className="experience-content">
              <h3>Research Associate II</h3>
              <p className="experience-company">Genocea Biosciences · Cambridge, MA</p>
              <p className="experience-description">
                Ran patient screening for a Phase 1/2a cancer immunotherapy trial. Built Python automation 
                for lab workflows and data analysis. This is where I caught the programming bug—automating 
                my own job was too much fun to stop.
              </p>
            </div>
          </article>
          <article className="experience-item fade-up" style={{ animationDelay: '0.25s' }}>
            <span className="experience-period">2019 — 2020</span>
            <div className="experience-content">
              <h3>Clinical Research Coordinator</h3>
              <p className="experience-company">Massachusetts General Hospital · Boston, MA</p>
              <p className="experience-description">
                Coordinated breast oncology clinical trials. Worked directly with patients and saw firsthand 
                how much of healthcare runs on paper and workarounds. Planted the seed for wanting to fix that.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-list">
              <span className="skill-item">Go</span>
              <span className="skill-item">JavaScript / TypeScript</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-list">
              <span className="skill-item">React / Next.js</span>
              <span className="skill-item">Tailwind / MUI</span>
              <span className="skill-item">Chart.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend & Infra</h3>
            <div className="skill-list">
              <span className="skill-item">Node.js / FastAPI</span>
              <span className="skill-item">GCP / AWS</span>
              <span className="skill-item">Kubernetes / Docker</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Data</h3>
            <div className="skill-list">
              <span className="skill-item">PostgreSQL / MongoDB</span>
              <span className="skill-item">Redis / ClickHouse</span>
              <span className="skill-item">Qdrant / Vector Search</span>
              <span className="skill-item">FHIR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="experience-list">
          <div className="education-item fade-up">
            <span className="experience-period">2022 — 2024</span>
            <div>
              <h3>Boston University</h3>
              <p>M.S. in Software Development</p>
            </div>
          </div>
          <div className="education-item fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="experience-period">2015 — 2019</span>
            <div>
              <h3>Northeastern University</h3>
              <p>B.S. in Biology · Behavioral Neuroscience & Psychology minors</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
