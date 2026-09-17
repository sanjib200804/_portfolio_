'use client';

import { profileData } from '@/data/profile';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '10rem 0 6rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem',
        }}
      >
        {/* Left Main Title */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              background: 'rgba(255, 85, 0, 0.08)',
              border: '1px solid rgba(255, 85, 0, 0.25)',
              backdropFilter: 'blur(6px)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ff5500',
                boxShadow: '0 0 10px #ff5500',
              }}
            />
            <span
              style={{
                color: '#ff6b22',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
              }}
            >
              SANJIB GARU
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(3.5rem, 7.5vw, 6.8rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '1.5rem',
              textShadow: '0 4px 30px rgba(0,0,0,0.85)',
            }}
          >
            AI Engineer &amp;
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 40%, rgba(255, 85, 0, 0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Full-Stack
            </span>
            <br />
            Developer
          </h1>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span style={{ color: '#ff5500', fontWeight: 700 }}>●</span>
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.9)',
                ...textShadowStyle,
              }}
            >
              {profileData.statusLine}
            </span>
          </div>
        </div>

        {/* Right Supporting Card */}
        <div
          style={{
            maxWidth: '400px',
            marginTop: '1.5rem',
            padding: '2.2rem',
            borderRadius: '28px',
            ...sheerGlassStyle,
          }}
        >
          <h2
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              lineHeight: 1.35,
              color: '#ffffff',
              marginBottom: '0.85rem',
              ...textShadowStyle,
            }}
          >
            Great design should feel invisible.
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              ...textShadowStyle,
            }}
          >
            {profileData.heroSubtitle}
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                backgroundColor: '#ff5500',
                color: '#ffffff',
                padding: '0.7rem 1.6rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.86rem',
                letterSpacing: '0.02em',
                boxShadow: '0 6px 24px rgba(255,85,0,0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(5px)',
                color: '#ffffff',
                padding: '0.7rem 1.6rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.86rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                ...textShadowStyle,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)')}
            >
              LET&apos;S CONNECT
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Services Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          padding: '1.6rem 2rem',
          borderRadius: '24px',
          marginTop: '4rem',
          ...sheerGlassStyle,
        }}
      >
        {[
          { num: '#01', label: 'AI Agents & Systems' },
          { num: '#02', label: 'RAG & GenAI Architecture' },
          { num: '#03', label: 'Python / FastAPI Backends' },
          { num: '#04', label: 'Full-Stack Applications' },
        ].map((item, idx) => (
          <div key={idx}>
            <span
              style={{
                display: 'block',
                color: '#ff5500',
                fontWeight: 800,
                fontSize: '0.88rem',
                marginBottom: '0.25rem',
                ...textShadowStyle,
              }}
            >
              {item.num}
            </span>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', ...textShadowStyle }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
