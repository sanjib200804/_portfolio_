import { profileData } from '@/data/profile';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function JourneySection() {
  return (
    <section
      id="journey"
      style={{
        padding: '6rem 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
      }}
    >
      {/* Left Column: Journey */}
      <div
        style={{
          borderRadius: '32px',
          padding: '3rem',
          ...sheerGlassStyle,
        }}
      >
        <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', ...textShadowStyle }}>
          {profileData.journey.title}
        </h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', marginBottom: '2rem', ...textShadowStyle }}>
          {profileData.journey.subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {profileData.journey.steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.95rem',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '0.4rem 0',
                borderBottom: idx < profileData.journey.steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                ...textShadowStyle,
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ff5500' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Education & Current Focus */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Education */}
        <div
          style={{
            borderRadius: '32px',
            padding: '3rem',
            ...sheerGlassStyle,
          }}
        >
          <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', ...textShadowStyle }}>
            {profileData.education.title}
          </h3>

          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem', ...textShadowStyle }}>
              {profileData.education.degree}
            </h4>
            <p style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.45, ...textShadowStyle }}>
              {profileData.education.institution}
            </p>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 85, 0, 0.12)',
              border: '1px solid rgba(255, 85, 0, 0.3)',
              color: '#ff6b22',
              fontSize: '0.85rem',
              fontWeight: 800,
              ...textShadowStyle,
            }}
          >
            <span>STATUS: {profileData.education.status}</span>
          </div>
        </div>

        {/* Current Focus */}
        <div
          style={{
            borderRadius: '32px',
            padding: '3rem',
            ...sheerGlassStyle,
          }}
        >
          <span
            style={{
              color: '#ff5500',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '0.4rem',
              ...textShadowStyle,
            }}
          >
            ACTIVE RESEARCH & FOCUS
          </span>
          <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem', ...textShadowStyle }}>
            {profileData.currentFocus.title}
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.98rem', lineHeight: 1.55, marginBottom: '1.5rem', ...textShadowStyle }}>
            {profileData.currentFocus.statement}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {profileData.currentFocus.tags.map((tag, tIdx) => (
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
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
