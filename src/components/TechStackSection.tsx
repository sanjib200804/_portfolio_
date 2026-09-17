import { skillsData } from '@/data/skills';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function TechStackSection() {
  return (
    <section
      id="stack"
      style={{
        padding: '10rem 0 7rem 0',
      }}
    >
      <div style={{ marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            ...textShadowStyle,
          }}
        >
          TECHNICAL STACK
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', ...textShadowStyle }}>
          Core production technologies organized by domain.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: '28px',
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              ...sheerGlassStyle,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  ...textShadowStyle,
                }}
              >
                {cat.category}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#ff5500', fontWeight: 800 }}>
                0{idx + 1}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '0.38rem 0.85rem',
                    borderRadius: '9999px',
                    color: 'rgba(255, 255, 255, 0.95)',
                    ...textShadowStyle,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
