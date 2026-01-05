import { useState } from 'react';
import budget from '../images/dashFinal.mp4';
import lemoncub from '../images/calm.mp4';
import termVid from '../images/lemonapp.mp4';
import pythonApp from '../images/pythonApp.mp4';
import movieApp from '../images/movieAppDemo.mp4';
import musicSearch from '../images/musicSearch.mp4';
import groupSimilar from '../images/groupSimilar.mp4';

const projects = [
  {
    id: 1,
    title: 'Refine — AI E-commerce Search',
    description: 'Built the entire frontend and core backend microservices for an AI-powered e-commerce search platform. Owned product UX, merchant dashboard, Auth0 authentication, and vector search infrastructure.',
    tech: ['Next.js', 'Go', 'Auth0', 'Qdrant', 'PostgreSQL', 'GCP'],
    video: groupSimilar,
    isWork: true,
  },
  {
    id: 2,
    title: 'Music Search Engine',
    description: 'Semantic search over Spotify data using Qdrant vector database. Combines dense and sparse embeddings from text metadata and album cover images for multimodal search.',
    tech: ['Python', 'Qdrant', 'Spotify API', 'React', 'Vector Embeddings'],
    video: musicSearch,
  },
  {
    id: 3,
    title: 'Healthcare Self-Help App',
    description: 'A comprehensive self-help application with user authentication and data management capabilities.',
    tech: ['PostgreSQL', 'Prisma', 'Express', 'Node.js', 'React', 'OKTA'],
    video: termVid,
  },
  {
    id: 4,
    title: 'Budgeting Dashboard',
    description: 'Financial management application with interactive data visualizations and expense tracking.',
    tech: ['Java', 'Spring Boot', 'MariaDB', 'React', 'Chart.js'],
    video: budget,
  },
  {
    id: 5,
    title: 'Artist Portfolio',
    description: 'A beautifully crafted portfolio site focused on smooth transitions, animations, and responsive design.',
    tech: ['React', 'CSS Animations', 'Responsive Design'],
    video: lemoncub,
  },
  {
    id: 6,
    title: 'Movie Rating App',
    description: 'Platform for users to discover, rate, and review movies with a modern user interface.',
    tech: ['MongoDB', 'Mongoose', 'Express', 'Node.js', 'React'],
    video: movieApp,
  },
  {
    id: 7,
    title: 'Gene Computation Tool',
    description: 'Scientific application for analyzing genetic data with visualization capabilities.',
    tech: ['Python', 'Matplotlib', 'Data Analysis'],
    video: pythonApp,
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <main className="portfolio-container" style={{ paddingTop: '8rem' }}>
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
        <div className="hero-content">
          <p className="hero-greeting">Selected Work</p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Projects & Experiments
          </h1>
          <p className="hero-description">
            A collection of projects showcasing full-stack development, 
            from healthcare applications to creative portfolios.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: 'none', paddingTop: '2rem' }}>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                opacity: 0,
                animation: `fadeUp 0.6s ease ${index * 0.1}s forwards`,
              }}
            >
              <div className="project-info">
                <span className="project-number">0{index + 1}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-preview">
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  autoPlay={hoveredProject === project.id}
                  style={{
                    opacity: hoveredProject === project.id ? 1 : 0.7,
                    transition: 'opacity 0.3s ease',
                  }}
                  ref={(el) => {
                    if (el) {
                      el.playbackRate = 2;
                      if (hoveredProject === project.id) {
                        el.play().catch(() => {});
                      } else {
                        el.pause();
                        el.currentTime = 0;
                      }
                    }
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
