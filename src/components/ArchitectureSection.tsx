import { profileData } from '@/data/profile';
import { textShadowStyle, sheerGlassStyle } from './styles';

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      style={{
        padding: '7rem 0',
      }}
    >
      <div style={{ marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            marginBottom: '0.85rem',
            ...textShadowStyle,
          }}
        >
          {profileData.architecture.title}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', maxWidth: '750px', lineHeight: 1.55, ...textShadowStyle }}>
          {profileData.architecture.statement}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {profileData.architecture.pipeline.map((item, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: '24px',
              padding: '2rem 1.6rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              ...sheerGlassStyle,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff5500' }}>
                STEP {item.step}
              </span>
              {idx < profileData.architecture.pipeline.length - 1 && (
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.9rem' }}>→</span>
              )}
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', ...textShadowStyle }}>
              {item.label}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, ...textShadowStyle }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
