'use client';

import { projectsData } from '@/data/projects';
import { textShadowStyle } from './styles';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '7rem 0',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '0.5rem',
            ...textShadowStyle,
          }}
        >
          SELECTED WORK
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', ...textShadowStyle }}>
          Intelligent platforms and multi-agent frameworks built from first principles.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            style={{
              background: project.isFeatured ? 'rgba(16, 16, 22, 0.08)' : 'rgba(12, 12, 16, 0.04)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              border: project.isFeatured ? '1px solid rgba(255, 85, 0, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '36px',
              padding: '3.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
            }}
          >
            {/* Left Overview */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                  <span style={{ color: '#ff5500', fontWeight: 800, fontSize: '0.92rem', ...textShadowStyle }}>
                    PROJECT #{project.num}
                  </span>
                  {project.isFeatured && (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        backgroundColor: 'rgba(255, 85, 0, 0.15)',
                        color: '#ff6b22',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 85, 0, 0.35)',
                      }}
                    >
                      PRIMARY FEATURED
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    ...textShadowStyle,
                  }}
                >
                  {project.name}
                </h3>
                <p style={{ color: '#ff6b22', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.25rem', ...textShadowStyle }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2rem', ...textShadowStyle }}>
                  {project.description}
                </p>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.04em',
                    ...textShadowStyle,
                  }}
                >
                  TECHNOLOGIES
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '2.2rem' }}>
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.025)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        color: '#ffffff',
                        ...textShadowStyle,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={project.links.viewProject}
                    style={{
                      backgroundColor: '#ff5500',
                      color: '#ffffff',
                      padding: '0.65rem 1.6rem',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      boxShadow: '0 4px 20px rgba(255,85,0,0.35)',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    VIEW PROJECT →
                  </a>
                  <a
                    href={project.links.viewCode}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(5px)',
                      color: '#ffffff',
                      padding: '0.65rem 1.6rem',
                      borderRadius: '9999px',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      ...textShadowStyle,
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)')}
                  >
                    VIEW CODE
                  </a>
                </div>
              </div>
            </div>

            {/* Right Key Features List */}
            <div
              style={{
                borderRadius: '28px',
                padding: '2.2rem',
                background: 'rgba(10, 10, 14, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  marginBottom: '1.4rem',
                  display: 'block',
                  ...textShadowStyle,
                }}
              >
                KEY ARCHITECTURAL FEATURES
              </span>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                {project.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      ...textShadowStyle,
                    }}
                  >
                    <span style={{ color: '#ff5500', fontWeight: 800 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
